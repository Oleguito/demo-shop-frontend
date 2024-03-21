import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {UserQuery} from "@/types/UserQuery";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function concatTailwindClasses(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export class Utils {
    static getCurrentUserFromLS() {
        if (typeof localStorage !== "undefined") {
            const localUser = localStorage.getItem("currentUser");
            if(localUser !== null) {
                const user: UserQuery = JSON.parse(localUser);
                return user;
            }
        }
    }
}

