import './Prediction.css';
//import { require } from 'react'

const Prediction = () => {

  return (
    <div className="Prediction">
      <h1>PREDICTION</h1>

        <div className="percentage-Output">

            <div className="input-form">
                <form>
                    <label>
                        Time in Months:
                        <input type="text" name="time" />
                    </label>
                </form>
            </div>


            <div className="result">
                <p>temp result</p>
            </div>

        </div>

        {/* Visualization of data */}
        <div className="data-display">
            <div className="graph">
                <p>init</p>
            </div>

            <div className="news-article">
                <p>init</p>
            </div>

        </div>




    </div>
  );
}

export default Prediction;