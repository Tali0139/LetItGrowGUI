import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"


interface IRoot {
    class: Class;
    common_name: string;
    cultivars: any[];
    division: Division;
    duration: string;
    family: Family;
    family_common_name: string;
    forms: any[];
    genus: Genus;
    hybrids: any[];
    id: number;
    images: Image[];
    main_species: MainSpecies;
    native_status: string;
    order: Order;
    scientific_name: string;
    sub_species: any[];
    varieties: any[];
  }
  
interface Class {
    id: number;
    link: string;
    name: string;
    slug: string;
  }
  
   interface Division {
    id: number;
    link: string;
    name: string;
    slug: string;
  }
  
   interface Family {
    common_name: string;
    id: number;
    link: string;
    name: string;
    slug: string;
  }
  
   interface Genus {
    id: number;
    link: string;
    name: string;
    slug: string;
  }
  
   interface Image {
    url: string;
  }
  
   interface MainSpecies {
    author: any;
    bibliography: any;
    common_name: string;
    complete_data: boolean;
    duration: string;
    family_common_name: string;
    flower: Flower;
    foliage: Foliage;
    fruit_or_seed: FruitOrSeed;
    growth: Growth;
    id: number;
    images: Image2[];
    is_main_species: boolean;
    main_species_id: any;
    native_status: string;
    products: Products;
    propagation: Propagation;
    scientific_name: string;
    seed: Seed;
    slug: string;
    soils_adaptation: SoilsAdaptation;
    sources: Source[];
    specifications: Specifications;
    status: string;
    synonym: boolean;
    type: string;
    year: any;
  }
  
   interface Flower {
    color: string;
    conspicuous: any;
  }
  
   interface Foliage {
    color: string;
    porosity_summer: string;
    porosity_winter: string;
    texture: string;
  }
  
   interface FruitOrSeed {
    color: string;
    conspicuous: boolean;
    seed_abundance: string;
    seed_period_begin: string;
    seed_period_end: string;
    seed_persistence: boolean;
  }
  
   interface Growth {
    anaerobic_tolerance: string;
    caco_3_tolerance: string;
    cold_stratification_required: any;
    drought_tolerance: string;
    fertility_requirement: string;
    fire_tolerance: string;
    frost_free_days_minimum: number;
    hedge_tolerance: string;
    moisture_use: string;
    ph_maximum: number;
    ph_minimum: number;
    planting_density_maximum: PlantingDensityMaximum;
    planting_density_minimum: PlantingDensityMinimum;
    precipitation_maximum: PrecipitationMaximum;
    precipitation_minimum: PrecipitationMinimum;
    resprout_ability: any;
    root_depth_minimum: RootDepthMinimum;
    salinity_tolerance: string;
    shade_tolerance: string;
    temperature_minimum: TemperatureMinimum;
  }
  
   interface PlantingDensityMaximum {
    acre: number;
    sqm: number;
  }
  
   interface PlantingDensityMinimum {
    acre: number;
    sqm: number;
  }
  
   interface PrecipitationMaximum {
    cm: number;
    inches: number;
  }
  
   interface PrecipitationMinimum {
    cm: number;
    inches: number;
  }
  
   interface RootDepthMinimum {
    cm: number;
    inches: number;
  }
  
   interface TemperatureMinimum {
    deg_c: number;
    deg_f: number;
  }
  
   interface Image2 {
    url: string;
  }
  
   interface Products {
    berry_nut_seed: any;
    christmas_tree: any;
    fodder: any;
    fuelwood: any;
    lumber: any;
    naval_store: any;
    nursery_stock: any;
    palatable_browse_animal: any;
    palatable_graze_animal: string;
    palatable_human: any;
    post: any;
    protein_potential: any;
    pulpwood: any;
    veneer: any;
  }
  
   interface Propagation {
    bare_root: any;
    bulbs: any;
    container: any;
    corms: any;
    cuttings: any;
    seed: boolean;
    sod: any;
    sprigs: boolean;
    tubers: any;
  }
  
   interface Seed {
    bloom_period: string;
    commercial_availability: string;
    seed_spread_rate: string;
    seedling_vigor: string;
    seeds_per_pound: any;
    small_grain: any;
    vegetative_spread_rate: string;
  }
  
   interface SoilsAdaptation {
    coarse: boolean;
    fine: boolean;
    medium: boolean;
  }
  
   interface Source {
    last_update: string;
    name: string;
    source_url: string;
    species_id: number;
  }
  
   interface Specifications {
    bloat: string;
    c_n_ratio: string;
    coppice_potential: any;
    fall_conspicuous: any;
    fire_resistance: any;
    growth_form: string;
    growth_habit: string;
    growth_period: string;
    growth_rate: string;
    known_allelopath: any;
    leaf_retention: any;
    lifespan: string;
    low_growing_grass: any;
    mature_height: MatureHeight;
    max_height_at_base_age: MaxHeightAtBaseAge;
    nitrogen_fixation: string;
    regrowth_rate: string;
    shape_and_orientation: string;
    toxicity: string;
  }
  
   interface MatureHeight {
    cm: number;
    ft: number;
  }
  
   interface MaxHeightAtBaseAge {
    cm: any;
    ft: any;
  }
  
   interface Order {
    id: number;
    link: string;
    name: string;
    slug: string;
  }
  
  interface IPiWeatherData {
    measureTime: any;
    deviceLocation: string;
    randomTemperature: number;
    rain: number;
    windSpeed: number;
}

interface IPlants{
  id: number;
  plantAPIid: string;
}

interface IUser {
  id: number;
  username: string;
  password: string;
  email: string;
  plants: IPlants [];  
}



let baseUri: string = "https://growproxy.azurewebsites.net/plants?complete_data=true&token=Mm9iZ21HRkk2V1BhSTFLaUJQL0d5dz09&page_size=100"
// let baseUri: string = "https://growproxy.azurewebsites.net/plants?q=Canna&token=Mm9iZ21HRkk2V1BhSTFLaUJQL0d5dz09"
 //let baseUri: string = "https://growproxy.azurewebsites.net/plants/135533?token=Mm9iZ21HRkk2V1BhSTFLaUJQL0d5dz09"
let weatherUri: string = "https://letitgrowweather.azurewebsites.net/api/weather"
let searchUri: string =  "https://growproxy.azurewebsites.net/plants/?q="
let tokenString: string = "&token=Mm9iZ21HRkk2V1BhSTFLaUJQL0d5dz09&page_size=1000"
let UsersUri: string = "https://letitgrowinmemorydb.azurewebsites.net/api/users"
let backupWeatherdata: IPiWeatherData = {randomTemperature:  10, measureTime: Date.now(),rain: 2,windSpeed: 10, deviceLocation: "The shed" }



new Vue({
    el: "#app",

    mounted: function(){
      this.weatherData = backupWeatherdata
      setInterval(this.getWeatherData(), 60000)

      setInterval(this.plantTempAlert(), 1000)
      
      
      
    },

    data: {
        defaultPic: "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/plant.png",
        plants: [],
        plantsSorted: [],
        weatherData: [],
        errors: [],
        deleteId: 0,
        deleteMessage: "",
        formData: { model: "", vendor: "", price: 0 },
        addMessage: "",
        searchString: "",
        users: [],
        loggedInUser: [],
        username: "",
        password: ""
        
    },

    methods: {
      //Get request til at finde alle planter ud fra baseUri
        getAllPlants() {
            axios.get<IRoot[]>(baseUri)
                .then((response: AxiosResponse<IRoot[]>) => {
                    console.log(response.statusText)
                    console.log(response.data)
                    this.plants = response.data
                    this.plants.forEach((plant: { id: any }) => { this.getSpecificPlants(plant.id)})
                    
                })
                .catch((error: AxiosError) => {
                    //this.message = error.message
                    //alert(error.message) // https://www.w3schools.com/js/js_popup.asp
                })
        },

        showAllPlantsDiv() {
            document.getElementById('showPlants').style.display = "block";
        },

      

        getSearchPlants() {
          console.log(this.searchString)
          axios.get<IRoot[]>(searchUri+this.searchString+tokenString)
              .then((response: AxiosResponse<IRoot[]>) => {
                  console.log(response.statusText)
                  console.log(response.data)
                  this.plantsSorted = []
                  this.plants = response.data
                if(this.plants.length >= 1){
                  this.plants.forEach((plant: {id: number, common_name: string}) => {
                    if(plant.common_name != null){
                      this.getSpecificPlants(plant.id)
                    }})
                 // if(this.plantsSorted.length < 1){
                    //alert(this.searchString +" gave no results! - Try another searchphrase")} 
                }
                else{
                  alert(this.searchString +" gave no results! - Try another searchphrase")
                }
              })
              .catch((error: AxiosError) => {
                  this.message = error.message
                  console.log(this.message)
                  //alert(error.message) // https://www.w3schools.com/js/js_popup.asp
              })
        },
        //Get request til at finde hver plantes komplette information fra GetAllPlants eller getSearchPlant
        getSpecificPlants(id: number) {
            axios.get<IRoot>("https://growproxy.azurewebsites.net/plants/" + id + "?" + "token=Mm9iZ21HRkk2V1BhSTFLaUJQL0d5dz09")
                .then((response: AxiosResponse<IRoot>) => {
                    console.log(response.statusText)
                    console.log(response.data)
                    if(response.data.images.length > 0 && response.data.common_name != null){
                      this.plantsSorted.push(response.data)
                    }
                    
                                          
                })
                .catch((error: AxiosError) => {
                    //this.message = error.message
                    //alert(error.message) // https://www.w3schools.com/js/js_popup.asp
                })
        },
        //Get Request til VejrData
        getWeatherData() {
          axios.get<IPiWeatherData[]>(weatherUri)
              .then((response: AxiosResponse<IPiWeatherData[]>) => {
                  console.log(response.statusText)
                  console.log(response.data)
                  if(response.data.length > 0){this.weatherData = response.data}
                                 
              })
              .catch((error: AxiosError) => {
                  this.message = error.message
                  //alert(error.message) // https://www.w3schools.com/js/js_popup.asp
                  console.log(this.message)
                 
                 this.weatherData = backupWeatherdata
              })
      },

      // DisplayPersonalWeather(){
      //   document.getElementById('personalWeather').style.display = "block"
      // },

   

      loginUser() {
        axios.get<IUser[]>(UsersUri)
        .then((response: AxiosResponse<IUser[]>) => {
          console.log(response.statusText)
          this.users = response.data
          console.log("getAllUsers called")
          console.log(this.username)
          console.log(this.password)
          this.users.forEach((user: IUser) => { if(this.username == user.username && this.password == user.password){
              this.loggedInUser = user
              //this.loggedInUser.username = this.loggedInUser.username.capitalize();
              console.log("User:" + this.loggedInUser.username + " Logged in")
              console.log(this.loggedInUser.plants)
             // this.getAllPlants()
             this.loggedInUser.plants.forEach((plant: IPlants) => { this.getSpecificPlants(plant.plantAPIid)});
          document.getElementById('loginDiv').style.display = "none"
          document.getElementById('welcomeMessage').style.display = "block"
          document.getElementById('personalWeather').style.display = "block"
          document.getElementById('welcomeMessage').style.marginTop = "-6em"
          }
      
        })
        if(this.loggedInUser.length < 1){
          alert("Wrong username or password")
        }
          
      })
            .catch((error: AxiosError) => {
                //this.message = error.message
                //alert(error.message) // https://www.w3schools.com/js/js_popup.asp
            })  
    },

    plantTempAlert(){
      console.log("YESSS")
      this.plantsSorted.forEach((plant: IRoot) => { if (plant.main_species.growth.temperature_minimum.deg_c > -10 && plant.main_species.growth.temperature_minimum.deg_c != null)
        {
        alert("Its to cold. Bring your " + plant.common_name +"inside"  )
      }});
    },





        
        deletePlant(deleteId: number) {
            let uri: string = baseUri + "/" + deleteId
            axios.delete<void>(uri)
                .then((response: AxiosResponse<void>) => {
                    this.deleteMessage = response.status + " " + response.statusText
                    this.getAllPlants()
                })
                .catch((error: AxiosError) => {
                    //this.deleteMessage = error.message
                    alert(error.message)
                })
        },

       

        addPlant() {
          axios.post<IRoot[]>(baseUri, this.formData)
            .then((response: AxiosResponse) => {
               let message: string = "response " + response.status + " " + response.statusText
              this.addMessage = message
              this.getAllPlants()
             })
              .catch((error: AxiosError) => {
                // this.addMessage = error.message
                alert(error.message)
              })
        }

       
    }
})