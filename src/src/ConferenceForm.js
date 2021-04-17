import React, { useState } from 'react';
import _ from 'lodash';
import SimpleSchema from 'simpl-schema';
import 'uniforms-bridge-simple-schema-2';
import { AutoForm, SubmitField, SelectField } from 'uniforms-bootstrap4';
import Row from 'react-bootstrap/Row';
import ConferenceData from './data/ConferenceData';
import ConferenceCard from './ConferenceCard';

/** Create a schema to specify the structure of the data to appear in the form. */
const makeSchema = (type, keywords, years) => new SimpleSchema({
  type: { type: String, label: 'Presentation Type', allowedValues: type, defaultValue: type[0] },
  keyword: { type: String, label: 'Keyword', allowedValues: keywords, defaultValue: keywords[0] },
  year: { type: String, label: 'Year', allowedValues: years, defaultValue: years[0] },
});

const allTypesLabel = '(All Types)';
const allKeywordsLabel = '(All Keywords)';
const allYearsLabel = '(All Years)';

/**
 * Display the section that appears when the 'All' toggle is selected for Conferences.
 * This section provides a form to enable users to filter the set of Conferences displayed.
 */
function ConferenceForm() {
  const [type, setType] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const [year, setYear] = useState(null);
  const conferencedata = new ConferenceData();
  const types = [allTypesLabel].concat(conferencedata.getTypes());
  const keywords = [allKeywordsLabel].concat(conferencedata.getKeywords());
  const years = [allYearsLabel].concat(conferencedata.getYears());
  const formSchema = makeSchema(types, keywords, years);

  const submit = (data) => {
    setType(data.type);
    setKeyword(data.keyword);
    setYear(data.year);
  };

  const appendTypeCount = (type2) => {
    const count = conferencedata.getTypeCount(type2);
    return (count ? `${type2} (${count})` : type2);
  };

  const appendKeywordCount = (keyword2) => {
    const count = conferencedata.getKeywordCount(keyword2);
    return (count ? `${keyword2} (${count})` : keyword2);
  };

  const appendYearCount = (year2) => {
    const count = conferencedata.getYearCount(year2);
    return (count ? `${year2} (${count})` : year2);
  };

  /**
   * So, logically speaking, the entries to display is simply the intersection of the three sets of entries indicated
   * by the form values.
   * But, let's say the user wants to see everything. Then in the case of CSDL, you're doing the intersection of three
   * sets, all containing the exact same 240+ entries. On mobile, that can take a perceivable amount of time.
   * So, this function is an 'optimization' to reduce the amount of intersection required to a minimum.
   */
  const determineEntries = () => {
    const intersectList = [];
    // Display no entries when the form has not been submitted.
    if (type === null) {
      return [];
    }
    // Only add to the intersect list when form control is not the default.
    if (type !== allTypesLabel) {
      intersectList.push(conferencedata.getKeysByType(type));
    }

    if (keyword !== allKeywordsLabel) {
      intersectList.push(conferencedata.getKeysByKeyword(keyword));
    }

    if (year !== allYearsLabel) {
      intersectList.push(conferencedata.getKeysByYear(year));
    }
    // Only do the intersect when the user has specified at least two form controls.
    let keysToSort = [];
    if (intersectList.length === 0) {
      keysToSort = conferencedata.getKeys();
    } else
      if (intersectList.length === 1) {
        keysToSort = intersectList[0];
      } else {
        keysToSort = _.intersection(...intersectList);
      }
    const entries = _.map(keysToSort, key => conferencedata.getEntry(key));
    return conferencedata.getSortedEntries(entries);
  };

  const entries = determineEntries();

  return (
    <div>
      <p style={{ textAlign: 'center' }}>Display intersection of a Type, Keyword, and/or Year.</p>
      <AutoForm schema={formSchema} onSubmit={data => submit(data)}>
        <Row className="justify-content-center">
          <div style={{ paddingRight: '10px' }}>
            <SelectField name='type' label={false} transform={(type2) => appendTypeCount(type2)}/>
          </div>
          <div style={{ paddingRight: '10px' }}>
            <SelectField name='keyword' label={false} transform={(keyword2) => appendKeywordCount(keyword2)}/>
          </div>
          <div style={{ paddingRight: '10px' }}>
            <SelectField name='year' label={false} transform={(year2) => appendYearCount(year2)}/>
          </div>
          <SubmitField value='Select Conferences'/>
        </Row>
      </AutoForm>
      {_.map(entries, (entry, idx) => <ConferenceCard key={idx} entry={entry}/>)}
    </div>
  );
}

export default ConferenceForm;
