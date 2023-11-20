import './Home.css';
import Grid from '@mui/material/Grid';

export const Home=()=>{
  return (
    <div className='main-page'>
      <div className="first-section">
        <div className="first-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate, illum earum eaque commodi vitae sint aspernatur ipsam eum quas ex voluptatibus itaque veniam quam delectus reprehenderit numquam error quae.
        </div>
        <div className="first-right">
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;