import React,{ useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // You can import your custom CSS file here if needed
const Navbar = (props) => {
    const [s,sets]=useState("in")
    const [s2,sets2]=useState("")
    const [searchQuery, setSearchQuery] = useState('');
  const  handleItemClick=(country)=>{
if(country=="China")
{
    sets("ch")
}
else if(country=="India")
{
sets("in")
}
else if(country=="USA")
{
    sets("us")
}
    
    }
    const handleSearchSubmit=()=>
    {
let arrayfromq=searchQuery.split(' ');
let dummyarray=arrayfromq;
let noinclude=["a", "an", "for", "them", "by", "they", "seem", "under", "on", "this", "that", "those", "these", "is", "of", "at", "from", "in", "with", "to", "but", "and", "or", "as", "it", "you", "he", "she", "we", "they", "I", "me", "us", "them", "him", "her", "my", "our", "their", "your", "its", "his", "theirs", "yours", "his", "hers", "its", "the", "all", "every", "some", "any", "no", "yes", "not", "do", "does", "did", "has", "have", "had", "was", "were", "be", "being", "been", "can", "could", "shall", "should", "will", "would", "may", "might", "must", "might", "let", "make", "made", "see", "saw", "seen", "give", "gave", "given", "take", "took", "taken", "go", "went", "gone", "come", "came", "comes", "we're", "you're", "they're", "it's", "I'm", "you're", "he's", "she's", "that's", "there's", "here's", "who's", "what's", "where's", "when's", "why's", "how's", "myself", "yourself", "himself", "herself", "itself", "ourselves", "yourselves", "themselves", "nobody", "nothing", "no one", "someone", "something", "somewhere", "anybody", "anything", "anywhere", "everyone", "everything", "everywhere", "anything", "something", "everything", "nothing", "somewhere", "everywhere", "there", "here", "anywhere", "somewhere", "nowhere", "everywhere", "something", "everything", "nothing", "anybody", "everybody", "nobody", "someone", "everyone", "no one", "anyone", "anything", "everything", "nothing", "something", "somewhere", "anywhere", "everywhere", "oneself", "nobody's", "somebody's", "everybody's", "anyone's", "everyone's", "no one's", "someone's", "something's", "everything's", "nothing's", "somewhere's", "anywhere's", "everywhere's", "who's", "whose", "what's", "which's", "where's", "when's", "why's", "how's", "me", "you", "him", "her", "it", "us", "them", "mine", "yours", "his", "hers", "its", "ours", "theirs", "my", "your", "his", "her", "its", "our", "their", "neither", "either", "both", "half", "all", "any", "each", "every", "few", "most", "much", "less", "little", "more", "none", "no", "not", "nothing", "nowhere", "nobody", "no one", "neither", "nor", "either", "both", "besides", "therefore", "thus", "hence", "accordingly", "so", "but", "however", "although", "even though", "if", "unless", "until", "when", "whenever", "where", "wherever", "while", "about", "above", "across", "after", "against", "along", "amid", "among", "around", "as", "at", "before", "behind", "below", "beneath", "beside", "between", "beyond", "but", "by", "concerning", "considering", "despite", "down", "during", "except", "for", "from", "in", "inside", "into", "like", "near", "of", "off", "on", "onto", "out", "outside", "over", "past", "regarding", "round", "since", "through", "throughout", "to", "toward", "under", "underneath", "unlike", "until", "unto", "up", "upon", "with", "within", "without", "worth"];
let newarray=arrayfromq.filter(word=>
  {
    if(noinclude.includes(word))
    {
      return false;
    }
    else{
      return true;
    }
  })
  const query = newarray.join('+');
  setSearchQuery(query);
    }
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const theClick=(category)=>
    {
      if(category=="sports")
      {
        sets2("sports");
      }
      else if(category=="business")
      {
        sets2("business");
      }
      else if(category=="general")
      {
        sets2("general");
      }
      else if(category=="technology")
      {
        sets2("technology");
      }
      else if(category=="science")
      {
        sets2("science");
      }
      else if(category=="entertainment")
      {
        sets2("entertainment");
      }
      else if(category=="health")
      {
        sets2("health");
      }
     
    }
 
    useEffect(() => {
      props.thesubmit(s);
      props.the2submit(s2);
      props.navsearchfunc(searchQuery);
    
    },[s,s2,searchQuery,handleSearchSubmit,theClick,handleItemClick]); 
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary third">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">WatchDog</Link> {/* Use Link for navigation */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/sports" onClick={() => theClick('sports')}>Sport</Link> {/* Use Link for navigation */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business" onClick={() => theClick('business')}>Business</Link> {/* Use Link for navigation */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment" onClick={() => theClick('entertainment')}>Entertainment</Link> {/* Use Link for navigation */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health" onClick={() => theClick('health')}>Health</Link> {/* Use Link for navigation */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science" onClick={() => theClick('science')}>Science</Link> {/* Use Link for navigation */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general" onClick={() => theClick('general')}>General</Link> {/* Use Link for navigation */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology" onClick={() => theClick('technology')}>Technology</Link> {/* Use Link for navigation */}
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                country
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#" onClick={() => handleItemClick('China')}>China</Link></li>
                <li><Link className="dropdown-item" to="#" onClick={() => handleItemClick('India')}>India</Link></li>
                <li><Link className="dropdown-item" to="#" onClick={() => handleItemClick('USA')}>USA</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={searchQuery}
        onChange={handleSearchChange}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

