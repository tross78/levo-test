import './App.css';
import Card from './components/Card/Card';

function App() {
  const today = new Date();
  return (
    <div className="container w-75">
      <h1 className="mt-4 mb-4 text-danger">Related Articles</h1>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="row row-cols-md-3 g-4">
        <div className="col">
          <Card date={today} title="Love of Learning, art keys to a great year for Gwen" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel lacus gravida, consequat mi quis, suscipit lorem. Vivamus dignissim pellentesque lectus vitae condimentum. Curabitur dignissim felis ut ultrices ultricies. Maecenas placerat rutrum nulla viverra venenatis. Mauris tristique pharetra consectetur." colorName="primary" />
        </div>
        <div className="col">
          <Card date={today} title="Curious minds leads the way for carer Jill" description="Vestibulum dictum vel risus non tempor. " text="Vestibulum dictum vel risus non tempor. Morbi id elit sapien. Nam non purus nec ligula euismod placerat. Etiam ipsum sem, interdum id nulla a, lobortis elementum justo. Mauris sodales eu nulla sed facilisis. Donec turpis velit, auctor sed pharetra tempus, mattis a ipsum. Pellentesque laoreet suscipit egestas." colorName="secondary" />
        </div>
        <div className="col">
          <Card date={today} title="Celebrating our volunteers" description="Nunc et tortor in diam rhoncus scelerisque. " text="Nunc et tortor in diam rhoncus scelerisque. Fusce accumsan turpis et massa gravida consequat. Cras ornare, magna eu feugiat porta, ex erat eleifend orci, nec pharetra nulla tellus vitae orci. Suspendisse felis nibh, vehicula sit amet lacus nec, finibus blandit velit. Donec tristique iaculis sollicitudin. " colorName="info" />
        </div>
      </div>
    </div>
  );
}

export default App;
