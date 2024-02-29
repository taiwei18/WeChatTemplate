import {Local} from "@/utils/storage";
import {decryptJWT} from "@/utils/axios-utils";

export const UserInfo = {
    //获取用户信息
    get() {
        const accessToken = Local.get("access-token");
        if (!accessToken) return null;
        return decryptJWT(accessToken);
    }
};
