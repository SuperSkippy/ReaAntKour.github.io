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
            "key": "phd",
            "type": "phd",
            "year": "2009-14",
            "title": "PhD in Biosciences",
            "location": "University of Nottingham, UK",
            "topic": "Artificial Photosynthesis",
            "area":"Interdisciplinary research combining Biology, Mathematics and Chemical Engineering",
            "thesisTitle": "LHCII-assisted TiO2 photocatalysis of CO2 to small organic compounds.",
            "supervisors": [
                "Prof. E. Murchie (Biosciences, Nottingham)", 
                "Prof. O. Jensen (Applied Math., Manchester)", 
                "Prof. A. Ruban (Biophysics, London)", 
                "Prof. J. Wattis (Applied Math., Nottingham)", 
                "Prof. M. Maroto-Valer (Chemical Eng., Edinburgh)"
            ],
            "result": "Awarded 20th January 2014",
            "vivaDate":"Viva: 17th December 2013",
            "abstract": "I developed a novel photocatalyst by combining the light harvesting complex (LHCII) of plants with a known UV-light photocatalyst, TiO2, to convert CO2 to fuel using visible light. Mathematical models of the chemical reactions identified targets for optimisation.",
            "keywords": [
            "Journal-Article"
            ],
            "sortKey": 2014
        },
        {
            "key": "mathdegree",
            "type": "degree",
            "year": "2005-09",
            "title": "Degree in Mathematics",
            "location": "University of Crete, Greece",
            "result":"GPA: 8.24/10",
            "awards": ["Pichorides award, for best undergraduate student in the Department, 2009."],
            "keywords": [
            "Journal-Article"
            ],
            "sortKey": 2009
        },
        {
            "key": "biodegree",
            "type": "degree",
            "year": "2005-08", 
            "title": "BSc (Hons) in Biology",
            "location": "Imperial College London, UK",
            "result": "Upper Second Class (68%)",
            "abstract": "Final Year Project: Diversification rates in deep time: phylogenies can tell the tale, a simulation study using R. Grade 79%.",
            "supervisor": "Prof A. Purvis",
            "keywords": [
            "Journal-Article"
            ],
            "sortKey": 2008
        }
    ]
    
}

export default WorkExperienceData;
