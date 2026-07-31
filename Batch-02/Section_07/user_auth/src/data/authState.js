import { reactive } from "vue";
import axios from 'axios';


const authState = reactive({
    isAuthenticated: false,
    user: null,
    username: null,
    password: null,
    login(){
        axios.post("http://localhost:8001/index.php", {
            email: this.email,
            password: this.password
        }).then( (response) => {
            if(response.data.status.success == 1){
                this.isAuthenticated = true;
                this.user = response.data;
                this.username = null;
                this.password = null; 
            }
        })
    },
    logout(){

    }
})

export default authState; 