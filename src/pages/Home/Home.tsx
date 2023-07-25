import i18n from 'common/language/i18n';
import useLanguage from 'hooks/useLanguage';
import useTheme from 'hooks/useTheme';
import { Link } from 'react-router-dom';
import { Language, Theme } from 'store/slices/appSlice';

const Home = () => {
   const { theme, setCurrentTheme } = useTheme();
   const { language, setCurrentLanguage } = useLanguage();

   const setLanguageToTurkish = () => {
      setCurrentLanguage(language === Language.TR ? Language.EN : Language.TR);
   };

   const setDarkTheme = () => {
      setCurrentTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
   };

   return (
      <div>
         <div> Current theme is {theme}</div>
         <button onClick={setDarkTheme}>Toggle theme text</button>

         <br />
         <br />
         <div>{i18n.t('greeting')}</div>
         <button onClick={setLanguageToTurkish}>
            Set Language to {language === 'tr' ? 'English' : 'Turkish'}
         </button>

         <br />

         <br />
         <Link to="/posts">List of posts</Link>
      </div>
   );
};

export default Home;
