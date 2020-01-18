import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ILogin } from './loginforms.model';

@Injectable()

export class LoginService {

    private url = 'http://localhost:5000/api/auth/login';
    private userInfo = 'http://localhost:5000/api/auth/userinfo';

    constructor(private http: HttpClient) {}

    loginUser(user): Observable<ILogin[]> {
        return this.http.post<ILogin[]>(this.url, user);
    }

    getUserInfo(token) {
        localStorage.setItem('TOKEN_NUMBER', token);
        return this.http.get(this.userInfo, {headers: {'x-access-token': token}});
    }
}
