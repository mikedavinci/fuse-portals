import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			// {
			// 	id: 'calendar',
			// 	title: 'Calendar',
			// 	translate: 'CALENDAR',
			// 	type: 'item',
			// 	icon: 'today',
			// 	url: '/apps/calendar'
			// },
			// {
			// 	id: 'academy',
			// 	title: 'Academy',
			// 	translate: 'ACADEMY',
			// 	type: 'item',
			// 	icon: 'school',
			// 	url: '/apps/academy'
			// },
			// {
			// 	id: 'todo',
			// 	title: 'To-Do',
			// 	translate: 'TODO',
			// 	type: 'item',
			// 	icon: 'check_box',
			// 	url: '/apps/todo',
			// 	badge: {
			// 		title: 3,
			// 		bg: 'rgb(255, 111, 0)',
			// 		fg: '#FFFFFF'
			// 	}
			// },
			// {
			// 	id: 'file-manager',
			// 	title: 'File Manager',
			// 	translate: 'FILE_MANAGER',
			// 	type: 'item',
			// 	icon: 'folder',
			// 	url: '/apps/file-manager'
			// },
			{
				id: 'contacts',
				title: 'Contacts',
				translate: 'DASHBOARD',
				type: 'item',
				icon: 'account_box',
				url: '/apps/contacts/all'
			},
			{
				id: 'chat',
				title: 'Chat',
				translate: 'CHAT',
				type: 'item',
				icon: 'chat',
				url: '/apps/chat',
				badge: {
					title: 13,
					bg: 'rgb(9, 210, 97)',
					fg: '#FFFFFF'
				}
			}
			// {
			// 	id: 'faq',
			// 	title: 'FAQ',
			// 	type: 'item',
			// 	icon: 'help',
			// 	url: '/pages/faq'
			// },
			// {
			// 	id: 'knowledge-base',
			// 	title: 'Knowledge Base',
			// 	type: 'item',
			// 	icon: 'import_contacts',
			// 	url: '/pages/knowledge-base'
			// }
		]
	}
];

export default navigationConfig;
