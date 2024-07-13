import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
    ];
    fetchUsers() {
        return this.users;
    }
    createUser(user: {id: number; name: string}) {
        this.users.push(user);
    }

    fetchUserById(id: number) {
        const user = this.users.filter(u => u.id === id);
        return user.length ? user : null;
    }
}
