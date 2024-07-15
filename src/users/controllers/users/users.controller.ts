import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { createUserDTO } from 'src/users/dtos/creaetUser.dto';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    public users = this.userService.fetchUsers();


    private userPosts = {
        1: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }],
        2: [{ id: 3, title: 'Post 3' }],
    };

    @Get("sorted")
    getUsersSorted(@Query("sortDesc", ParseBoolPipe) sortDesc: boolean) {
        return this.users;
    }
    @Get()
    getUsers() {
        return this.users;
    }

    @Get(':id/posts')
    getUsersPosts(@Param('id') id: string) {
        const userPost = this.userPosts[id];
        if (!userPost) {
            return { error: 'User not found or has no posts' };
        }
        return userPost;
    }
    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) user: createUserDTO) {
        this.userService.createUser(user);
        return user;
    }
    @Get(":id")
    getUserById(@Param("id", ParseIntPipe) id: number) {
        const user = this.userService.fetchUserById(id);
        console.log(user)
        if (!user)
            throw new HttpException("user not found", HttpStatus.BAD_REQUEST)
        return user;
    }
}
