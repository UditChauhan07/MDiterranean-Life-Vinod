import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import Packages from '../../../json/categories.json';
import PackageCategories from '../../../json/categoriesPackeges.json';
import PackageList from '../../../json/packeges.json';
import MastHead from 'components/MastHead';
import PackegeCategories from 'components/package/categories';
import CategoryList from 'components/CategoriesList';
import PackageDetails from 'components/packageDetails';
import ItinraryPages from 'components/ItineraryPages'
import Credit from 'components/ItinaryCredit'
import BookingDetail from 'components/BookingDetail/Booking'

const Packege = () => {
  const router = useRouter();
  if (!router.query?.package) return null;
  if (router.query?.package.length == 0) return null;
  if (!Packages[router.query.package[0]]) return null;
  if (router.query.package.length == 1) {
    const category = Packages[router.query.package[0]];
    return (
      <Layout newsLetterShow={false}>
        <section>
          <MastHead source={category.MastHead} />
          <PackegeCategories categories={category.categories} />
        </section>
      </Layout>
    );
  } else if (router.query.package.length == 3) {
    const pack = PackageList[router.query.package[0]][router.query.package[1]][router.query.package[2]];
    return (
      <Layout>
        <section>
          <MastHead source={pack.MastHead} v2/>
          {pack?.content && <PackageDetails data={pack.content} />}
        </section>
      </Layout>
    );
  }else if (router.query.package.length == 4) {

    return (
      <Layout>
      <section>
        <ItinraryPages/>
        </section>
        </Layout>
    );}

    else if (router.query.package.length == 5) {

      return (
        <Layout>
        <section>
          <Credit/>
          </section>
          </Layout>
      );

    }

    else if (router.query.package.length == 6) {

      return (
        <Layout>
        <section>
          <BookingDetail/>
          </section>
          </Layout>
      );

      
  } else {
    const packs = PackageCategories[router.query.package[0]][router.query.package[1]];
    return (
      <Layout newsLetterShow={false}>
        <section>
          <MastHead source={packs.MastHead} />
          <CategoryList data={packs.List} />
        </section>
      </Layout>
    );
  }
};
export default Packege;
