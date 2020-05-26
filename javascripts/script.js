console.log(districtsData);
var total_numbers_info = {
    "url": "https://api.covid19india.org/data.json",
    "method": "GET",
    "timeout": 0,
};

var state_district_wise = {
    "url": "https://api.covid19india.org/v2/state_district_wise.json",
    "method": "GET",
    "timeout": 0,
};

$(document).ready(function () {
    $.ajax(total_numbers_info).done(function (response) {
        const s_x = response["statewise"].filter((x) => { return x['statecode'].toLowerCase() == 'ka' })[0];
        const s_y = new State(s_x.confirmed, s_x.deltaconfirmed, s_x.active, s_x.deltaconfirmed - s_x.deltarecovered, s_x.recovered, s_x.deltarecovered, s_x.deaths, s_x.deltadeaths);
        createTotalNoInfo(s_y);
        $.ajax(state_district_wise).done(function (response) {
            const d_x = response.filter((x) => { return x['statecode'].toLowerCase() == 'ka' })[0];
            // console.log(x);
            const d_y = d_x['districtData'].map((a) => { return new District(s_y, a) });
            console.log(d_y);

            createTable(d_y)
        });
    });

    function createTotalNoInfo(y) {
        $('#confirmed .content .t_count').text(y.confirmed.t_count);
        $('#confirmed .content .i_count').text(`[+${y.confirmed.i_count}]`);
        $('#active .content .t_count').text(y.active.t_count);
        if (Math.sign(y.active.i_count) == -1) $('#active .content .i_count').text(`[-${Math.abs(y.active.i_count)}]`);
        else $('#active .content .i_count').text(`[+${y.active.i_count}]`);
        $('#active .header .perc').text(`${y.active.perc}%`);
        $('#active .content .perc2').text(`(${y.active.perc}%)`);
        $('#recovered .content .t_count').text(y.recovered.t_count);
        $('#recovered .content .i_count').text(`[+${y.recovered.i_count}]`);
        $('#recovered .header .perc').text(`${y.recovered.perc}%`);
        $('#recovered .content .perc2').text(`(${y.recovered.perc}%)`);
        $('#deceased .content .t_count').text(y.deceased.t_count);
        $('#deceased .content .i_count').text(`[+${y.deceased.i_count}]`);
        $('#deceased .header .perc').text(`${y.deceased.perc}%`);
        $('#deceased .content .perc2').text(`(${y.deceased.perc}%)`);
    }

    function createTable(data) {
        $('#dw-table-info').DataTable({
            data: data,
            columns: [
                { data: "district", title: 'District' },
                { data: "confirmed.t_count", title: 'Confirmed' },
                { data: "active.t_count", title: 'Active' },
                { data: "recovered.t_count", title: 'Recovered' },
                { data: "deceased.t_count", title: 'Deceased' },
                { data: "confirmed.perc", title: 'Total Cases in %'}
            ],
            scrollY: "300px",
            scrollX: true,
            scrollCollapse: true,
            paging: false,
            info: false,
            fixedColumns: true,
            autoWidth: true,
            "dom": 'lCfrtip',
            "order": [],
            "colVis": {
                "buttonText": "Hiển thị",
                "overlayFade": 0,
                "align": "right"
            },
            "language": {
                "lengthMenu": '_MENU_ bản ghi trên trang',
                "search": '',
                "searchPlaceholder": "search",
                "paginate": {
                    "previous": '<i class="fa fa-angle-left"></i>',
                    "next": '<i class="fa fa-angle-right"></i>'
                }
            }
        });
    }


})



var settings = {
    "url": "https://api.covid19india.org/raw_data1.json",
    "method": "GET",
    "timeout": 0,
};

// $.ajax(settings).done(function (response) {
//     // console.log(response);
//     var stateData = filterForStatesData(response['raw_data'], 'ka');
//     // console.log(stateData);
//     var obj = {};
//     for (let i = 0; i < stateData.length; i++) {
//         const element = stateData[i];
//         const keys = Object.keys(obj);
//         if (!Object.keys(obj).includes(element.statepatientnumber)) {
//             if (element.currentstatus.toLowerCase() == "recovered" || element.currentstatus.toLowerCase() == "deceased") {
//                 obj[element.statepatientnumber] = {
//                     status: element.currentstatus,
//                     dateannounced: element.dateannounced,
//                     statuschangedate: element.statuschangedate
//                 }
//             } else {
//                 obj[element.statepatientnumber] = {
//                     status: element.currentstatus,
//                     dateannounced: element.dateannounced,
//                     statuschangedate: null
//                 }
//             }

//         } else {
//             if (obj[element.statepatientnumber].status != element.currentstatus) {
//                 obj[element.statepatientnumber].statuschangedate = element.dateannounced;
//             }
//         }
//     }
//     // console.log(JSON.stringify(obj));

//     // fs.writeFileSync('data.json', JSON.stringify(stateData));
// });



// $.ajax(total_numbers_info).done(function (response) {
//     const x = response["statewise"].filter((x) => { return x['statecode'].toLowerCase() == 'ka' })[0];
//     // console.log(x);
//     const y = new stateInfo(x.confirmed, x.deltaconfirmed, x.active, x.deltaconfirmed - x.deltarecovered, x.recovered, x.deltarecovered, x.deaths, x.deltadeaths);
//     console.log(y);
//     $('#confirmed .content .t_count').text(y.confirmed.t_count);
//     $('#confirmed .content .i_count').text(`[+${y.confirmed.i_count}]`);
//     $('#active .content .t_count').text(y.active.t_count);
//     if(Math.sign(y.active.i_count) == -1) $('#active .content .i_count').text(`[-${Math.abs(y.active.i_count)}]`);
//     else $('#active .content .i_count').text(`[+${y.active.i_count}]`);
//     $('#active .header .perc').text(`${Math.round(y.active.perc)}%`);
//     $('#active .content .perc2').text(`(${Math.round(y.active.perc)}%)`);
//     $('#recovered .content .t_count').text(y.recovered.t_count);
//     $('#recovered .content .i_count').text(`[+${y.recovered.i_count}]`);
//     $('#recovered .header .perc').text(`${Math.round(y.recovered.perc)}%`);
//     $('#recovered .content .perc2').text(`(${Math.round(y.recovered.perc)}%)`);
//     $('#deceased .content .t_count').text(y.deceased.t_count);
//     $('#deceased .content .i_count').text(`[+${y.deceased.i_count}]`);
//     $('#deceased .header .perc').text(`${Math.round(y.deceased.perc)}%`);
//     $('#deceased .content .perc2').text(`(${Math.round(y.deceased.perc)}%)`);
// });


var filterForStatesData = function (data, statecode) {
    // return data.map((x) => {
    //     if (x['statecode'].toLowerCase() == statecode.toLowerCase()) {
    //         return structureTheData(x);
    //     }
    // }).filter((x) => { return x });
    return data.filter((x) => { return x['statecode'].toLowerCase() == statecode.toLowerCase() });
}

var Patient = function (p_num, age, gender, district, status, h_date, r_date, state, notes) {
    this.number = p_num;
    this.age = age;
    this.gender = gender;
    this.status = status;
    this.hospitalizedDate = h_date;
    this.recoveredDate = r_date;
    this.district = district;
    this.state = state;
    this.notes = notes;
}

var State = function (c, dc, a, da, r, dr, d, dd) {
    this.confirmed = {
        t_count: c,
        i_count: dc
    };
    this.active = {
        t_count: a,
        i_count: da,
        perc: ((a / c) * 100).toFixed(2)
    };
    this.recovered = {
        t_count: r,
        i_count: dr,
        perc: ((r / c) * 100).toFixed(2)
    };
    this.deceased = {
        t_count: d,
        i_count: dd,
        perc: ((d / c) * 100).toFixed(2)
    }
}

var District = function (sd, dd) {
    this.district = dd.district;
    this.confirmed = {
        t_count: dd.confirmed,
        i_count: dd.delta.confirmed,
        perc: ((dd.confirmed / sd.confirmed.t_count) * 100).toFixed(2)
    };
    this.active = {
        t_count: dd.active,
        i_count: dd.delta.confirmed - dd.delta.recovered,
        perc: ((dd.active / sd.active.t_count) * 100).toFixed(2)
    };
    this.recovered = {
        t_count: dd.recovered,
        i_count: dd.delta.recovered,
        perc: ((dd.recovered / sd.recovered.t_count) * 100).toFixed(2)
    };
    this.deceased = {
        t_count: dd.deceased,
        i_count: dd.delta.deceased,
        perc: ((dd.deceased / sd.deceased.t_count) * 100).toFixed(2)
    }
}

// var structureTheData = function (d) {
//     // console.log(d.statepatientnumber);
//     // console.log(dataFormat(d.statepatientnumber, d.agebracket, d.gender, d.detecteddistrict, d.currentstatus, d.dateannounced, d.statuschangedate, d.detectedstate, d.notes));
//     return new Patient(d.statepatientnumber, d.agebracket, d.gender, d.detecteddistrict, d.currentstatus, d.dateannounced, d.statuschangedate, d.detectedstate, d.notes);
// }

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//         console.log(this.responseText);
//     }
// });

// xhr.open("GET", "https://api.covid19india.org/raw_data4.json");

// xhr.send();