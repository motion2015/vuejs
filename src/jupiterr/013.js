const color= "red";
const red= "#ff0000";
const blue= "#0000ff";
const fields= ['firstName', 'lastName', 'phoneNumber'];

// Object
// const COLORS = {red : red, blue: blue };
const COLORS = {red, blue };
// const props = {fields : fields };
const props = {fields};

// Function
const canvasDimensions = function (width, initialHeight) {
    const height = initialHeight *9 /16
    return {
        // width: width,
        // height: height
        width,
        height
    };
}

// Class

const Car = {
    color:color,
    // drive: function () {
    //     return 'Vroom!';
    // },
    // getColor: function () {
    //     return this.color;
    // }
    drive() {
        return 'Vroom!';
    },
    getColor() {
        return this.color;
    }
}