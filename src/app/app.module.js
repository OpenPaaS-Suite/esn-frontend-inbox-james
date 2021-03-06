'use strict';

const MODULE_NAME = 'esn.inbox-james';

angular.module(MODULE_NAME, [
  'ui.router',
  'op.dynamicDirective',
  'restangular',
  'uuid4',
  'ngFileSaver',
  'esn.session',
  'esn.configuration',
  'esn.async-action',
  'esn.user',
  'esn.session',
  'esn.infinite-list',
  'esn.i18n',
  'esn.scroll',
  'mgcrea.ngStrap.modal',
  'esn.inbox.libs',
  'linagora.esn.james'
]);

require('ui-select/dist/select.js');
require('esn-frontend-common-libs/src/frontend/js/modules/infinite-list/infinite-list.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/scroll.js');
require('esn-frontend-inbox/src/esn.inbox.libs/app/app.module.js');
require('esn-frontend-inbox/src/linagora.esn.james/app/app.module.js');

require('./app.routes');
require('./app.run');
require('./app.config');
require('./common/inbox-james-restangular.service.js');
require('./dlp/inbox-james-dlp.constants.js');
require('./dlp/inbox-james-dlp.component.js');
require('./dlp/inbox-james-dlp.run.js');
require('./dlp/quarantine/inbox-james-dlp-quarantine.controller.js');
require('./dlp/quarantine/inbox-james-dlp-quarantine.component.js');
require('./dlp/quarantine/subheader/inbox-james-dlp-quarantine-subheader.component.js');
require('./dlp/quarantine/actions/inbox-james-dlp-quarantine-actions.controller.js');
require('./dlp/quarantine/actions/inbox-james-dlp-quarantine-actions.component.js');
require('./dlp/quarantine/actions/inbox-james-dlp-quarantine-actions.run.js');
require('./dlp/rejected/inbox-james-dlp-rejected.controller.js');
require('./dlp/rejected/inbox-james-dlp-rejected.component.js');
require('./dlp/rejected/subheader/inbox-james-dlp-rejected-subheader.component.js');
require('./dlp/rejected/actions/inbox-james-dlp-rejected-actions.controller.js');
require('./dlp/rejected/actions/inbox-james-dlp-rejected-actions.component.js');
require('./dlp/rejected/actions/inbox-james-dlp-rejected-actions.run.js');
require('./dlp/rule/inbox-james-dlp-rule-displayer.controller.js');
require('./dlp/rule/inbox-james-dlp-rule-displayer.component.js');
require('./dlp/settings/inbox-james-dlp-settings.controller.js');
require('./dlp/settings/inbox-james-dlp-settings.component.js');
require('./dlp/settings/subheader/inbox-james-dlp-settings-subheader.component.js');
require('./dlp/settings/rule/inbox-james-dlp-settings-rule-form.controller.js');
require('./dlp/settings/rule/inbox-james-dlp-settings-rule-form.component.js');
require('./mail-repository/inbox-james-mail-repository.constants.js');
require('./mail-repository/inbox-james-mail-repository.service.js');
require('./mail-repository/inbox-james-mail-repository.controller.js');
require('./mail-repository/inbox-james-mail-repository.component.js');
require('./mail-repository/email/inbox-james-mail-repository-email.model.js');
require('./mail-repository/email/inbox-james-mail-repository-email-display.component.js');
require('./mail-repository/email/delete/inbox-james-mail-repository-email-delete-dialog.controller.js');
require('./mail-repository/header/inbox-james-mail-repository-header.controller.js');
require('./mail-repository/header/inbox-james-mail-repository-header.component.js');
require('./mail-repository/selection/inbox-james-mail-repository-email-selection.service.js');
require('./mail-repository/selection/inbox-james-mail-repository-email-selection.controller.js');
require('./mail-repository/selection/inbox-james-mail-repository-email-selection.component.js');
