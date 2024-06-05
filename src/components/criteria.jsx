function Criteria() {
  
    return (
      <>
      <section className="criteria-section" id="criteria">
            <div className="container">
                <div className="items row">
                    <h1 className="text-center">Criteria Competition</h1>
                    <div className="participant col-12 col-lg-5 mb-5 mb-lg-0">
                        <h4 className="text-center">Participant Criteria</h4>
                        <ul>
                            <li>Each team consists of a maximum of 2 people from the same school.</li>
                            <li>Participants are elementary, junior high school, senior high school and university.</li>
                            <li>Registration can be accessed via the website link wso.or.id</li>
                            <li>Participants must attach a certificate from the school (Statement letter) that the participant comes from the same school.</li>
                        </ul>
                    </div>
                    <div className="col-0 col-lg-2"></div>
                    <div className="assessment col-12 col-lg-5">
                        <h4 className="text-center">Assessment Criteria</h4>
                        <ul>                                
                            <li>Assessment is carried out using a points system.</li>
                            <li>Each multiple choice question has a value of 1 point.</li>
                            {/* <li>The teams that qualify for the second round are the best 60% of participants from each education level</li> */}
                            <li>Olympiad participants will compete forrankings in the form of:
                                <ul>
                                    <li>KKM more than 80: Will get a Gold Medal</li>
                                    <li>KKM 70 - 79: Will get a Silver Medal</li>
                                    <li>KKM less than 69: Will get a Bronze Medal</li>
                                </ul>
                            </li>
                            <li>Participants with scores below the KKM will receive an "Honorable Mention" certificate</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
  
  export default Criteria