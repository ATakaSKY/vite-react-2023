import i18n from 'common/language/i18n';
import useLanguage from 'hooks/useLanguage';
import useTheme from 'hooks/useTheme';
import { Language, Theme } from 'store/slices/appSlice';

const Home = () => {
   const { theme, setCurrentTheme } = useTheme();
   const { language, setCurrentLanguage } = useLanguage();

   const setLanguageToTurkish = () => {
      setCurrentLanguage(language === 'tr' ? Language.EN : Language.TR);
   };

   const setDarkTheme = () => {
      setCurrentTheme(Theme.Dark);
   };

   return (
      <div>
         <div> Current theme is {theme}</div>
         <button onClick={setDarkTheme}>Set Dark Theme</button>

         <br />
         <div>{i18n.t('greeting')}</div>
         <button onClick={setLanguageToTurkish}>
            Set Language to {language === 'tr' ? 'English' : 'Turkish'}
         </button>
      </div>
   );
};

export default Home;
