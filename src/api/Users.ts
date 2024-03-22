import {UserQuery} from "@/types/UserQuery";
import axios from "axios";
import * as constants from "@/constants/constants";
import {routes} from "@/app/routes/routes";

export async function getUserById(id: number): Promise<UserQuery> {
    const url = `${routes.serverUrl}/users/${id}`;
    const response = await axios.get(url);
    return response.data as UserQuery;
}
