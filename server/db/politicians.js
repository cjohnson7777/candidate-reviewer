// Public positions for the Nashville voter guide.
// Every stance is a short paraphrase of a linked source. Do not add a view that is not listed here.

export const UPDATED = 'November 12, 2026';

export const ISSUES = [
  { id: 'housing', label: 'Housing' },
  { id: 'cost', label: 'Cost of living' },
  { id: 'schools', label: 'Schools' },
  { id: 'transit', label: 'Getting around' },
  { id: 'health', label: 'Health care' },
  { id: 'safety', label: 'Public safety' },
  { id: 'immigration', label: 'Immigration' },
];

export const ISSUE_IDS = ISSUES.map((issue) => issue.id);

export const OFFICES = [
  { id: 'nashville', label: 'Nashville mayor' },
  { id: 'governor', label: 'Governor' },
  { id: 'senate', label: 'U.S. Senate' },
];

export const OFFICE_IDS = OFFICES.map((office) => office.id);

const issueLabel = Object.fromEntries(ISSUES.map((issue) => [issue.id, issue.label]));

export const POLITICIANS = [
  {
    id: 'oconnell',
    name: "Freddie O'Connell",
    party: 'Democrat',
    partyNote: 'Metro elections do not print a party on the ballot.',
    office: 'Mayor of Nashville',
    officeGroup: 'nashville',
    status: 'In office',
    detail: 'Elected in 2023. This term runs through 2027, so he was not on the November 2026 ballot.',
    website: 'https://www.nashville.gov/departments/mayor',
    summary: 'The current mayor. His public agenda centers on lowering everyday costs, funding affordable housing, and the Choose How You Move transit program.',
    positions: [
      {
        issue: 'housing',
        summary: 'The budget Metro Council passed makes what the city calls its largest housing investment so far. It puts more general-fund money into the Barnes Affordable Housing Trust Fund and adds a loan program for homes aimed at workers around 60% of the area median income.',
        sourceName: 'Nashville.gov',
        sourceUrl: 'https://www.nashville.gov/departments/mayor/news/mayor-freddie-oconnell-applauds-passage-operating-budget',
        sourceDate: '2026',
      },
      {
        issue: 'cost',
        summary: 'He proposed cutting the local sales tax on groceries from 2.25% to 1.75%. The city says that is about a 22% cut in the local grocery tax, and that a family of four spending about $1,200 a month on groceries would save about $360 over five years.',
        sourceName: 'Nashville.gov',
        sourceUrl: 'https://www.nashville.gov/departments/mayor/news/mayor-oconnell-files-proposed-fiscal-year-2027-budget',
        sourceDate: '2026',
      },
      {
        issue: 'transit',
        summary: 'He led Choose How You Move, a $3.1 billion, 15-year program for sidewalks, traffic signals, and WeGo bus service. The city says 214 signal upgrades and 78 sidewalk projects are underway, and that transit ridership is up 11%.',
        sourceName: 'Nashville.gov',
        sourceUrl: 'https://www.nashville.gov/departments/mayor/news/three-years-five-headlines-mayor-oconnells-first-term',
        sourceDate: '2026',
      },
      {
        issue: 'schools',
        summary: 'During his term the city opened Paragon Mills, Lakeview, and Percy Priest elementary schools. A Begin Bright program placed free Imagination Library books in 69 local daycares and preschools.',
        sourceName: 'Nashville.gov',
        sourceUrl: 'https://www.nashville.gov/departments/mayor/news/three-years-five-headlines-mayor-oconnells-first-term',
        sourceDate: '2026',
      },
      {
        issue: 'health',
        summary: 'He highlights Nashville Strong Babies, a program for care before and after birth, as part of supporting children from the day they are born.',
        sourceName: 'Nashville.gov',
        sourceUrl: 'https://www.nashville.gov/departments/mayor/news/mayor-freddie-oconnell-delivers-63rd-state-metro-address-lays-out-vision-years-ahead',
        sourceDate: '2026',
      },
    ],
  },
  {
    id: 'blackburn',
    name: 'Marsha Blackburn',
    party: 'Republican',
    partyNote: '',
    office: 'Governor-elect of Tennessee',
    officeGroup: 'governor',
    status: 'Governor-elect',
    detail: 'WPLN reported on Nov. 3, 2026 that she won the governor’s race by less than 3 points. She said she will stay in the U.S. Senate until she is sworn in.',
    website: 'https://www.blackburn.senate.gov/',
    summary: 'A longtime Republican senator and Tennessee’s governor-elect. In a Nashville Banner questionnaire she backed the state’s current conservative course: low taxes, school vouchers, abortion limits, and cooperation with federal immigration enforcement.',
    positions: [
      {
        issue: 'housing',
        summary: 'She says fast-growing parts of Tennessee have a housing shortage, and that the fix is simpler permitting and less regulation rather than new government housing programs. She ties homeownership to job and wage growth.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
      {
        issue: 'cost',
        summary: 'She opposes raising the minimum wage, saying a mandate would cost jobs. She says she will cut state spending before deciding whether a grocery-tax cut is possible, and she supports a constitutional ban on a statewide property tax.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
      {
        issue: 'schools',
        summary: 'She wants to expand Education Freedom Scholarships (private-school vouchers) until every family can use one, without extra state rules on those schools. She supports closing the U.S. Department of Education. She says children without legal immigration status should not get a free public education.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
      {
        issue: 'transit',
        summary: 'She supports the Boring Company’s Music City Loop tunnel and says the state should invest in roads, rail, rivers, airports, water systems, and broadband as more people move to Tennessee.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
      {
        issue: 'health',
        summary: 'She supports Tennessee’s ban on abortion at every stage of pregnancy and describes herself as 100% pro-life. She supports the state’s ban on cannabis. For rural hospitals, she points to free-standing emergency rooms and federal rural-health funding.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
      {
        issue: 'safety',
        summary: 'She says death sentences should be carried out after appeals, and that she would bring back the electric chair. She supports keeping CoreCivic private-prison contracts if the state oversees them. On guns, she says she will defend the Second Amendment and focus on mental health instead of new gun limits.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
      {
        issue: 'immigration',
        summary: 'She says Tennessee should keep working with the Trump administration on mass deportations, and that the Tennessee Highway Patrol should work with ICE through 287(g) agreements.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
    ],
  },
  {
    id: 'green',
    name: 'Jerri Green',
    party: 'Democrat',
    partyNote: '',
    office: '2026 Democratic nominee for governor',
    officeGroup: 'governor',
    status: '2026 nominee',
    detail: 'Memphis council member. She lost the Nov. 3, 2026 governor’s race to Marsha Blackburn. Her answers are included so you can compare the choice Nashville voters just had.',
    website: 'https://greenforgovernor.com/policy/',
    summary: 'The 2026 Democratic nominee for governor. Her campaign argued for a higher minimum wage, public-school funding instead of vouchers, abortion access, and an end to state help for federal immigration arrests.',
    positions: [
      {
        issue: 'housing',
        summary: 'On her first day she said she would use $10 million in unspent TANF funds to help young and low-income Tennesseans pay security deposits, add homeownership aid, and build more housing to bring prices down.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
      {
        issue: 'cost',
        summary: 'She supports ending the state grocery tax and paying for it by closing corporate tax loopholes and ending corporate rebate programs. She wants a state minimum wage of at least $20 an hour, up from $7.25.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
      {
        issue: 'schools',
        summary: 'She would remove private-school voucher funding in her first budget and put that money into public schools and teacher pay. She opposes shutting the U.S. Department of Education, citing special-education protections, and says all children have a right to public school.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
      {
        issue: 'transit',
        summary: 'She opposes the Boring Company tunnel under state roads, saying it favors tourists over daily transit. She supports passenger rail between cities and has backed using a cannabis tax for the road and bridge backlog.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
      {
        issue: 'health',
        summary: 'She says the abortion ban is too strict and would fight for doctors to provide care without criminal charges. She would expand Medicaid to protect rural hospitals and supports legalizing cannabis.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
      {
        issue: 'safety',
        summary: 'She would stop executions and end the state’s CoreCivic contracts. On guns she supports background checks for every sale, red-flag laws, free gun locks, and bringing back safety training for concealed-carry permits.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
      {
        issue: 'immigration',
        summary: 'She says immigration enforcement belongs to the federal government. She would end Tennessee Highway Patrol 287(g) agreements with ICE on her first day and opposes using the National Guard for immigration patrols.',
        sourceName: 'Nashville Banner',
        sourceUrl: 'https://nashvillebanner.com/2026/09/08/tennessee-governor-marsha-blackburn-jerri-green/',
        sourceDate: 'Sep 8, 2026',
      },
    ],
  },
  {
    id: 'hagerty',
    name: 'Bill Hagerty',
    party: 'Republican',
    partyNote: '',
    office: 'U.S. Senator from Tennessee',
    officeGroup: 'senate',
    status: 'Re-elected',
    detail: 'WPLN reported that he won a second term on Nov. 3, 2026, defeating Democrat Marquita Bradshaw.',
    website: 'https://www.hagerty.senate.gov/',
    summary: 'The Republican senator Nashville voters just re-elected. WPLN describes him as a Trump ally who backs mass deportation, coal and nuclear power, and fewer rules on homebuilding.',
    positions: [
      {
        issue: 'housing',
        summary: 'WPLN reports that he has introduced legislation to cut regulations on home construction.',
        sourceName: 'WPLN',
        sourceUrl: 'https://wpln.org/post/gop-sen-bill-hagerty-faces-memphis-democrat-marquita-bradshaw-in-rematch/',
        sourceDate: '2026',
      },
      {
        issue: 'transit',
        summary: 'WPLN reports that he has introduced legislation to penalize weak security on public transit.',
        sourceName: 'WPLN',
        sourceUrl: 'https://wpln.org/post/gop-sen-bill-hagerty-faces-memphis-democrat-marquita-bradshaw-in-rematch/',
        sourceDate: '2026',
      },
      {
        issue: 'health',
        summary: 'Talking about Affordable Care Act subsidies, he said Senate Republicans want the money to go to people instead of straight to insurance companies, and he described zero-premium plans as a source of fraud.',
        sourceName: 'Sen. Hagerty’s office',
        sourceUrl: 'https://www.hagerty.senate.gov/press-releases/2026/01/09/icymi-hagerty-joins-squawk-box-on-cnbc-to-discuss-venezuela-sanctions-obamacare-fraud-immigration-enforcement/',
        sourceDate: 'Jan 9, 2026',
      },
      {
        issue: 'immigration',
        summary: 'WPLN reports that he supports the Trump administration’s mass deportations and has introduced legislation to deny public benefits to people without legal status.',
        sourceName: 'WPLN',
        sourceUrl: 'https://wpln.org/post/gop-sen-bill-hagerty-faces-memphis-democrat-marquita-bradshaw-in-rematch/',
        sourceDate: '2026',
      },
    ],
  },
  {
    id: 'bradshaw',
    name: 'Marquita Bradshaw',
    party: 'Democrat',
    partyNote: '',
    office: '2026 Democratic nominee for U.S. Senate',
    officeGroup: 'senate',
    status: '2026 nominee',
    detail: 'Memphis environmental advocate. She lost the Nov. 3, 2026 Senate race to Bill Hagerty. Her platform is included so you can compare that choice.',
    website: 'https://www.marquitabradshaw.com/priorities',
    summary: 'The 2026 Democratic nominee for U.S. Senate. Her campaign site prioritizes teacher pay, affordable housing, health care, voting maps drawn by an independent body, and cleaner air and water.',
    positions: [
      {
        issue: 'housing',
        summary: 'Her campaign says she supports more affordable housing, help for renters and first-time buyers, action on homelessness, and protection from unfair housing practices.',
        sourceName: 'Bradshaw campaign',
        sourceUrl: 'https://www.marquitabradshaw.com/priorities',
        sourceDate: '2026',
      },
      {
        issue: 'cost',
        summary: 'Her campaign says the economy should expand good-paying jobs, support small businesses, and set fair wages so families in every community can get ahead.',
        sourceName: 'Bradshaw campaign',
        sourceUrl: 'https://www.marquitabradshaw.com/priorities',
        sourceDate: '2026',
      },
      {
        issue: 'schools',
        summary: 'Her campaign says every student should have a well-funded public school and every teacher should get competitive pay, classroom resources, and respect.',
        sourceName: 'Bradshaw campaign',
        sourceUrl: 'https://www.marquitabradshaw.com/priorities',
        sourceDate: '2026',
      },
      {
        issue: 'health',
        summary: 'Her campaign calls health care a right: lower drug prices, rural hospitals, mental-health care, and maternal care, so families are not choosing between treatment and rent.',
        sourceName: 'Bradshaw campaign',
        sourceUrl: 'https://www.marquitabradshaw.com/priorities',
        sourceDate: '2026',
      },
    ],
  },
];

export function listPoliticians({ search = '', office = '', issue = '' } = {}) {
  const words = search.toLowerCase().split(/\s+/).filter(Boolean);
  return POLITICIANS.filter((person) => {
    if (office && person.officeGroup !== office) return false;
    if (issue && !person.positions.some((position) => position.issue === issue)) return false;
    if (!words.length) return true;
    const haystack = [
      person.name,
      person.party,
      person.office,
      person.status,
      person.summary,
      ...person.positions.map((position) => `${issueLabel[position.issue]} ${position.summary}`),
    ].join(' ').toLowerCase();
    return words.every((word) => haystack.includes(word));
  }).map((person) => (
    issue ? { ...person, positions: person.positions.filter((position) => position.issue === issue) } : person
  ));
}

const STOP_WORDS = new Set(['what', 'whats', 'does', 'about', 'their', 'they', 'them', 'with', 'from', 'that', 'this', 'have', 'your', 'vote', 'voting', 'should', 'would', 'where', 'stand', 'stands', 'views', 'view', 'policy', 'policies', 'compare', 'versus', 'candidate', 'candidates', 'politician', 'politicians']);

export function searchPoliticians(question, limit = 4) {
  const words = question
    .toLowerCase()
    .replace(/[^a-z0-9'\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));

  const scored = POLITICIANS.map((person) => {
    const haystack = `${person.name} ${person.office} ${person.summary} ${person.positions.map((position) => `${position.issue} ${issueLabel[position.issue]} ${position.summary}`).join(' ')}`.toLowerCase();
    const score = words.filter((word) => haystack.includes(word)).length;
    return { person, score };
  }).filter((row) => row.score > 0).sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((row) => row.person);
}
