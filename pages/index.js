import EventList from '../components/EventList'
import { getFeaturedEvents } from '../dummy'
function MainPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Main Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}
export default MainPage;
