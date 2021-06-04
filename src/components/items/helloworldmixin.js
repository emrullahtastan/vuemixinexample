import oneFunc from "./oneFunc";
import twoFunc from "./twoFunc";
export default {
    mounted() {
        this.oneFuncGet();
        this.twoFuncGet();
    },
    methods: {
        oneFuncGet() {
            return oneFunc(this)
        },
        twoFuncGet(){
            return twoFunc(this)
        }
    }
}