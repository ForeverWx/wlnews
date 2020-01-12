
import moment from "moment";

var storage = {
    set(key, value, expired) {

        let source = { key: key, value: value };

        const now = Date.now();
        if (expired) {
            source.value = JSON.stringify({ data: value, expired: now + (1000 * 60 * expired) });
        } else {
            source.value = JSON.stringify({ data: value, expired: now + (1000 * 60) });
        }
        localStorage.setItem(source.key, source.value);
    },
    get(key) {
        const now = Date.now();

        let source = { key: key, value: null };

        source.value = JSON.parse(localStorage.getItem(source.key));

        if (source.value) {

            if (now >= source.value.expired) {
                this.remove(source.key);
                return;
            } else {
                return source.value.data;
            }
        }
    },getexpiredtime(key) {
        const now = Date.now();

        let source = { key: key, value: null };
        /* 从缓存中取出 信息*/
        source.value = JSON.parse(localStorage.getItem(source.key));

        /* 判断 key 是否失效 */
        if (source.value) {
            /* 获取失效时间 */
            let expired = source.value.expired;
            source.value.expired = source.value.expired = moment(expired).diff(moment(now), 'seconds');
            return source.value.expired;
        } else {
            return;
        }

    },
    remove(key) {
        localStorage.removeItem(key);
    }
}
export default storage;