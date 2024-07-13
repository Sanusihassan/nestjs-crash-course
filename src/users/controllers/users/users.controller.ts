import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { identity } from 'rxjs';
import { createUserDTO } from 'src/users/dtos/creaetUser.dto';

@Controller('users')
export class UsersController {
    private users = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
    ];

    private userPosts = {
        1: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }],
        2: [{ id: 3, title: 'Post 3' }],
    };

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
    createUser(@Body() user: createUserDTO) {
        // this.users.push(user);
        console.log(user);
        return {}
    }
    @Get(":id/:postId")
    getUserById(@Param("id") id: string, @Param("postId") postId: string) {
        return {id, postId}
    }
}
