import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <br />
      <center><h1><b>HTML Tag Practice</b></h1></center><br /><hr /><br />
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>This is a paragraph.</p>
      <p>This is another paragraph.</p>
      <b>This text is bold</b>
      <strong>This text is important!</strong>
      <i>This text is italic</i>
      <em>This text is emphasized</em>
      <small>This is some smaller text.</small>
      <p>Do not forget to buy <mark>milk</mark> today.</p>
      <p>My favorite color is <del>blue</del> red.</p>
      <p>My favorite color is <del>blue</del> <ins>red</ins>.</p>
      <p>This is <sub>subscripted</sub> text.</p>
      <p>This is <sup>superscripted</sup> text.</p>
      <p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
      <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
      <p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
      <bdo dir="rtl">This text will be written from right to left</bdo>
      <title>HTML Tutorial</title>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      <ol>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol><br /><br />
      <hr /><br /><br />
      <center>
        <iframe width="1080" height="480" src="https://www.youtube.com/embed/PKxSC4ZG3W0?si=xykJGsZRSoMZfMH1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </center><br /><br /><hr /><br />
      <center>
        <img width="768px" src='https://www.panaverse.co/red-p-logo-text_dao_croped.png'></img>
        </center><br /><br /><hr /><br /><br />
        <table width="100%">
          <tr>
          <th>Person 1</th>
          <th>Person 2</th>
          <th>Person 3</th>
          <th>Person 4</th>
          <th>Person 5</th>
          <th>Person 6</th>
          </tr>
          <tr>
          <td>Emil</td>
          <td>Tobias</td>
          <td>Linus</td>
          <td>Emil</td>
          <td>Tobias</td>
          <td>Linus</td>
          </tr>
          <tr>
          <td>16</td>
          <td>14</td>
          <td>10</td>
          <td>16</td>
          <td>14</td>
          <td>10</td>
          </tr>
          <tr>
            <td>Ali</td>
            <td>Umar</td>
            <td>Usman</td>
            <td>Abu Bakar</td>
            <td>Hassan</td>
            <td>Hussain</td>
          </tr>
        </table><br /><br /><hr /><br /><br />
        <form>
          <center>
            <h1>Form</h1><br />
            <input type="text" placeholder="Enter text"/><br/><br/>
            <input type="email" placeholder="Enter email"/><br/><br/>
            <input type="password" placeholder="Enter password"/><br/><br/>
            <label >Select Color : </label>
            <input type="color"/><br/><br/>
            <label >Choose File : </label>
            <input type="file"/><br/><br/>
            <label >Input-type = "hidden"</label>
            <input type="hidden"/><br/><br/>
            <label >Select Img </label>
            <input type="image"/><br/><br/>
            <input type="number" placeholder="Enter No."/><br/><br/>
            <label >Select Range  </label>
            <input type="range"/><br/><br/>
            <input type="search" placeholder="Search text"/><br/><br/>
            <input type="tel" placeholder="Enter tel No."/><br/><br/>
            <label >Choose Time </label>
            <input type="time"/><br/><br/>
            <label >Select date </label>
            <input type="date"/><br/><br/>
            <input type="datetime"  placeholder="Select date Time"/><br/><br/>
            <label >Select date Time local : </label>
            <input type="datetime-local"/><br/><br/>
            <label >Select week : </label>
            <input type="week"/><br/><br/>
            <label >Select Month </label>
            <input type="month"/><br/><br/>
            <input type="url" placeholder="Enter url"/><br/>
            <label >Male </label>
            <input type="radio"/>
            <label > Female </label>
            <input type="radio"/><br/><br/>
            <input type="checkbox"/>
            <label > Web Development </label>
            <input type="checkbox"/>
            <label > Web Development </label><br/><br/>
            <label >Sumbit : </label>
            <input type="submit"/><br/><br/>
            <label >Reset : </label>
            <input type="reset"/>
          </center>
        </form><br /><hr /><br /><br />
    </main>
  )
}
