"use strict"

let service = {
    name: "Service",
    init: () => {
        let doTeach = () => {
            console.log(this);
        }
        console.log("1")
        doTeach()
        let tnr = {
            name: "Ki",
            doTeach: () => {
                console.log(this)
                let inner = function() {
                    console.log(this)
                }
                return inner;
            }
        }
    }
}
service.init()