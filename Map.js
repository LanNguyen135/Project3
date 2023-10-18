function Func() {
    fetch("./states.json"
    .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data))
};

