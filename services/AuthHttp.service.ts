import { Customer } from "../entities/customer/Customer";
import { ApiHttpService } from "./ApiHttp.service";

type AuthCustomerSignUpDtoType = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

export class AuthHttpService {
	public static async login(email: string, password: string) {
		const { customer } = await ApiHttpService.post({
			path: 'auth/login',
			body: {
				email,
				password,
			}
		});
		return Object.assign(new Customer(), customer);
	}

	public static async signUp(dto: AuthCustomerSignUpDtoType) {
		const { customer } = await ApiHttpService.post({
			path: 'auth/signUp',
			body: dto,
		});
		return customer;
	}
}