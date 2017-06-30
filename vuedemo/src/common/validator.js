const REGEX_MOBILE = /^(13|15|17|18|14)[0-9]{9}$/;

/**
 * 常用验证方法
 */
export default {
    //验证手机号是否正确
    validMobile (mobile) {
        if (!mobile) {
            return false
        }
        return REGEX_MOBILE.test(mobile);
    }
};

