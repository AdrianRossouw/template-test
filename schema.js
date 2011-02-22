var schema = 
{
   "_id": "8de751bc8efca19d495ffd7b20ea25d5",
   "_rev": "1-213015daf39218542bd48a8e350be260",
   "type": "object",
   "properties": {
       "state": {
           "name": "State",
           "type": "string"
       },
       "postcode": {
           "name": "Postal Code",
           "type": "string"
       },
       "leacount": {
           "name": "# of LEAs Statewide ",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           }
       },
       "ppexpend": {
           "name": "Per Pupil Expenditure ",
           "definition": "Per-Pupil Expenditure: Average per-pupil expenditure equals the total amount of revenue paid out by school systems in the state divided by total enrollment. It includes funds from federal, state, and local sources spent on day to day operating expenses, such as teacher salaries. It does not include capital expenses, such as school construction.",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "format": "USD",
           "group": "Funding"
       },
       "rankppexpend": {
           "name": "Per Pupil Expenditure Rank ",
           "definition": "Per-Pupil Expenditure Rank: Rank of average state per-pupil expenditure among 50 states and DC where 1 represents the highest per pupil expenditure.",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "format": "numeric",
           "group": "Funding"
       },
       "distrepppexpend": {
           "name": "Districts Reporting Per Pupil Expenditure ",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "group": "Funding"
       },
       "ppexpendrank ": {
           "name": "Per Pupil Expenditure Rank Within State ",
           "definition": "Per-Pupil Expenditure Rank: Rank of average district per-pupil expenditure within a state where 1 represents the highest per pupil expenditure.     ",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "format": "numeric",
           "group": "Funding"
       },
       "schofiineq": {
           "name": "School Finance Inequity Among Districts (% of Per-Pupil Spending) ",
           "definition": "School Finance Inequity: School finance inequity reflects the average percentage difference in per-pupil spending among school districts across a given state according to a definition contained in Title I of the No Child Left Behind Act. The per-pupil expenditure for every school district is compared to the average per-pupil expenditure for the state and weighted according to size and poverty level.",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "format": "percent",
           "group": "Funding"
       },
       "schofiineqdol": {
           "name": "School Finance Inequity Among Districts (Per-Pupil Dollars) ",
           "definition": "School Finance Inequity: School finance inequity reflects the average dollar difference in per-pupil spending among school districts across a given state according to a definition contained in Title I of the No Child Left Behind Act. The per-pupil expenditure for every school district is compared to the average per-pupil expenditure for the state and weighted according to size and poverty level.",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "format": "USD",
           "group": "Funding"
       },
       "rankschofiineq": {
           "name": "School Finance Inequity Rank ",
           "definition": "School Finance Inequity: Rank of school finance inequity percentages among 50 states and DC where 1 represents the most equitable state.",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "format": "numeric",
           "group": "Funding"
       },
       "titlei": {
           "name": "Title I ",
           "definition": "Title I: Title I of the No Child Left Behind Act authorizes direct aid from the federal government to states and school districts to support the additional education needs of children from low-income families.",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "format": "USD",
           "group": "Funding"
       },
       "titleistim": {
           "name": "Title I Stimulus Estimated",
           "definition": "Title I: Title I of the No Child Left Behind Act authorizes direct aid from the federal government to states and school districts to support the additional education needs of children from low-income families.",
           "type": "string",
           "format": "USD",
           "group": "Funding"
       },
       "titleiest": {
           "name": "Title I  Estimated ",
           "definition": "Title I: Title I of the No Child Left Behind Act authorizes direct aid from the federal government to states and school districts to support the additional education needs of children from low-income families.",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "format": "USD",
           "group": "Funding"
       },
       "titleiprezest": {
           "name": "Title I  Estimated on President's Budget ",
           "definition": "Title I: Title I of the No Child Left Behind Act authorizes direct aid from the federal government to states and school districts to support the additional education needs of children from low-income families.",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "format": "USD",
           "group": "Funding"
       },
       "idea": {
           "name": "IDEA PART B ",
           "definition": "IDEA: The Individuals with Disabilities Education Act (IDEA) authorizes direct aid from the federal government to states and school districts to support the additional education needs of children with disabilities.",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "format": "USD",
           "group": "Funding"
       },
       "ideastim": {
           "name": "IDEA Part B Stimulus Estimated ",
           "definition": "IDEA: The Individuals with Disabilities Education Act (IDEA) authorizes direct aid from the federal government to states and school districts to support the additional education needs of children with disabilities.",
           "type": "string",
           "format": "USD",
           "group": "Funding"
       },
       "ideaest": {
           "name": "IDEA PART B  Estimated",
           "definition": "IDEA: The Individuals with Disabilities Education Act (IDEA) authorizes direct aid from the federal government to states and school districts to support the additional education needs of children with disabilities.",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "format": "USD",
           "group": "Funding"
       },
       "ideaprezest": {
           "name": "IDEA PART B  Estimated on President's Budget",
           "definition": "IDEA: The Individuals with Disabilities Education Act (IDEA) authorizes direct aid from the federal government to states and school districts to support the additional education needs of children with disabilities.",
           "type": "object",
           "extends": {
               "$ref": "seriesYear"
           },
           "format": "USD",
           "group": "Funding"
       },
       "sfsfstim": {
           "name": "State Fiscal Stabilization Fund Estimated ",
           "definition": "State Fiscal Stabilization Fund: The SFSF provides funds to states to fill in budget gaps between  and  or  funding levels.  Funds can be used for pre-K-16 purposes as well as government services.",
           "type": "object",
           "extends": {
               "$ref": "string"
           },
           "format": "USD",
           "group": "Funding"
       },
   },
   "version": 1,
   "id": "k12_state/1",
   "$schema": "http://json-schema.org/draft-03/schema#"
}

Object.defineProperty(schema, '_id', {enumerable: false});
Object.defineProperty(schema, '_rev', {enumerable: false});
Object.defineProperty(schema, 'version', {enumerable: false});
Object.defineProperty(schema, 'schema', {enumerable: false});

module.exports = schema;
