const person = {
    name : "fazla",
    address : {
        line1 : "Nurer Chala",
        city : "Dhaka",
        country : "Bangladesh"
    },
    profiles : ['facebook','twitter','linkedIn'],
    printProfile : ()=>{
        person.profiles.map((profile) => {
                console.log(profile)
            }
        )
    }
}


export default function LearnJavaScriptComponent(){
    return (
        <div>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.city}</div>
            <div>{person.profiles[2]}</div>
            <div>{person.printProfile()} </div>
        </div>
    );
}