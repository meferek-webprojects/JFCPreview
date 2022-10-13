import DepartmentsIcons from "./DepartmentsIcon";
import cowIcon from '../../public/icons/cow-solid.svg';
import gasIcon from '../../public/icons/gas-pump-solid.svg';
import virusIcon from '../../public/icons/virus-covid-slash-solid.svg';
import dropletIcon from '../../public/icons/droplet-solid.svg';
import recycleIcon from '../../public/icons/recycle-solid.svg';
import waterIcon from '../../public/icons/hand-holding-droplet-solid.svg';
import flowerIcon from '../../public/icons/glass-water-solid.svg';
import shipIcon from '../../public/icons/ship-solid.svg';
import hygieneIcon from '../../public/icons/hand-sparkles-solid.svg';
import horseIcon from '../../public/icons/horse-head-solid.svg';
import buisnessIcon from '../../public/icons/briefcase-solid.svg';
import lightbulbIcon from '../../public/icons/lightbulb-solid.svg';


const Departments = () => {
    return (
        <div className="flex flex-wrap">
            <DepartmentsIcons href="/dzial/zbiorniki-i-dystrybutory" icon={ gasIcon } title="Zbiorniki i dystrybutory" desc="zbiorniki ON i AdBlue, dystrybutory paliw, zbiorniki na wodę i ścieki" />
            <DepartmentsIcons href="/dzial/systemy-dezynfekcji" icon={ virusIcon } title="Systemy dezynfekcji" desc="zamgławiacze, tunele, kabiny do dezynfekcji" />
            <DepartmentsIcons href="/dzial/rolnictwo" icon={ cowIcon } title="Rolnictwo" desc="poidła, domki, maty, wyposażenie, wózki paszowe, karmienie" />
            <DepartmentsIcons href="/dzial/swietliki-i-okna" icon={ lightbulbIcon } title="Świetliki i okna" desc="świetliki dwuspadowe, świetliki łukowe, okna przesuwne" />
            <DepartmentsIcons href="/dzial/gromadzenie-wody" icon={ dropletIcon } title="Gromadzenie wody" desc="zbiorniki na deszczówkę i wodę pitną" />
            <DepartmentsIcons href="/dzial/pojemniki" icon={ recycleIcon } title="Pojemniki" desc="pojemniki do segregacji, pojemniki na piasek i sól" />
            <DepartmentsIcons href="/dzial/gospodarka-wodno-ściekowa" icon={ waterIcon } title="Gospodarka wodno-ściekowa" desc="oczyszczalnie ścieków, oczyszczalnie drenażowe, osadniki" />
            <DepartmentsIcons href="/dzial/donice-dekoracyjne" icon={ flowerIcon } title="Donice dekoracyjne" desc="podświetlane donice dekoracyjne" />
            <DepartmentsIcons href="/dzial/infrastruktura-morska" icon={ shipIcon } title="Infrastruktura morska" desc="boje znakowe, pławy, łodzie" />
            <DepartmentsIcons href="/dzial/higiena-i-bezpieczeństwo" icon={ hygieneIcon } title="Higiena i bezpieczeństwo" desc="wanienki do dezynfekcji, pokrywy na padłe zwierzęta, zlewy, szafki" />
            <DepartmentsIcons href="/dzial/wyposazenie-stajni" icon={ horseIcon } title="Wyposażenie stajni" desc="poidła, karmidła, paśniki, higiena" />
            <DepartmentsIcons href="/produkcja-kontraktowa" icon={ buisnessIcon } title="Produkcja kontraktowa" desc="projektowanie, produkcja form, produkcja na zlecenie wyrobów wytwarzanych metodą formowania rotacyjnego" />
        </div>
    );
}

export default Departments;