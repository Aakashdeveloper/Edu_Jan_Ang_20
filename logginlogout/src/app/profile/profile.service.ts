import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()

export class ProfileService {

    private userInfo = 'http://localhost:5000/api/auth/userinfo';

    constructor(private http: HttpClient) {}

    getUserInfo(token) {
        localStorage.setItem('TOKEN_NUMBER', token);
        return this.http.get(this.userInfo, {headers: {'x-access-token': token}});
    }
}
