import _ from 'lodash';

class WorkExperienceData {
    
    /* Return the entry associated with the passed key. */
    getEntry = (key) => _.find(this.data, entry => entry.key === key);

    extractKey = entries => _.map(entries, entry => entry.key);

    getKeys = () => {
        return this.extractKey(this.data);
    }

    data = [
        {
            "key": "project2",
            "type": "postdoc",
            "title": "Project 2 (2018-present): Dissecting quantitative, analogue, antisense-mediated transcriptional control (BBSRC funding)",
            "year": "2018-21",
            "abstract": "Plants need to quantitatively regulate gene expression to set up their vernalization requirement. I am developing a stochastic spatial model of protein expression in growing roots, that will be compared against microscopy data, collected by collaborators at SLU, Uppsala. Additionally, I am involved in coordinating the project and co-supervising a PhD student from an experimental background.",
            "contributors": [
            "Anis Meschichi",
            "Svenja Reeck",
            "Stefanie Rosa",
            "Caroline Dean",
            "Martin Howard"
            ],
            "keywords": [
            "Journal-Article"
            ],
            "sortKey": 2021
        },
        {
            "key": "project1",
            "type": "postdoc",
            "title": "Project 1 (2014-2018): Measurement of temperature exposure and integration over time (ERC funding)",
            "year": "2014-2018",
            "abstract": "Recognising winter reliably is vital for plants to correctly time developmental transitions. The temperature sensing mechanism of this process is still poorly understood, with the prevailing idea being that one or a few specialised “thermosensors” collect the temperature information. I worked on an interdisciplinary project and developed a mathematical model that helped elucidate this mechanism, showing that multiple, distinct temperature inputs are necessary and implicated growth as a thermosensor. Together with collaborators (JIC, Lund and Sundsvall), I designed and carried out experiments that showed that plants sense the “absence of warmth” as the signature of winter. Our mathematical model had predictive power and I used it to predict the plant’s response in a climate warming scenario.",
            "contributors": [
            "Jo Hepworth",
            "Yusheng Zhao",
            "Julia I Qüesta",
            "Rebecca H Bloomer",
            "Amélie Heckmann",
            "Torbjörn Säll",
            "Svante Holm",
            "Caroline Dean",
            "Martin Howard"
            ],
            "keywords": [
            "Journal-Article"
            ],
            "sortKey": 2018
        }
    ]
    
}

export default WorkExperienceData;
