import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"

interface IPlant {
    
}

let baseUri: string = "Azure"

new Vue({
    el: "#app",
    data: {
        plants: [],
        errors: [],
        deleteId: 0,
        deleteMessage: "",
        formData: { },
        addMessage: ""
    },
    methods: {
        getAllCars() {
            axios.get<IPlant[]>(baseUri)
                .then((response: AxiosResponse<IPlant[]>) => {
                    this.cars = response.data
                })
                .catch((error: AxiosError) => {
                    //this.message = error.message
                    alert(error.message) // https://www.w3schools.com/js/js_popup.asp
                })
        },
        deleteCar(deleteId: number) {
            let uri: string = baseUri + "/" + deleteId
            axios.delete<void>(uri)
                .then((response: AxiosResponse<void>) => {
                    this.deleteMessage = response.status + " " + response.statusText
                    this.getAllCars()
                })
                .catch((error: AxiosError) => {
                    //this.deleteMessage = error.message
                    alert(error.message)
                })
        },
        addCar() {
            axios.post<IPlant>(baseUri, this.formData)
                .then((response: AxiosResponse) => {
                    let message: string = "response " + response.status + " " + response.statusText
                    this.addMessage = message
                    this.getAllCars()
                })
                .catch((error: AxiosError) => {
                    // this.addMessage = error.message
                    alert(error.message)
                })
        }
    }
})