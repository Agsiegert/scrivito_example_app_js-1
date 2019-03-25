import * as Scrivito from 'scrivito';
import couponConfigDialogMenuIcon from '../assets/images/arrow_next.svg';

Scrivito.extendMenu(menu => {
  menu.insert({
    id: "globalSectionConfiguration",
    title: "Edit section configuration",
    icon: couponConfigDialogMenuIcon,
    onClick: () => Scrivito.openDialog('GlobalSectionConfigDialog'),
    position: { after: 'system.openPageDetails' },
    group: 'system.details',
  });
});