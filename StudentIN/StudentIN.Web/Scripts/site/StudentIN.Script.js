(function() {
	'use strict';
	var $asm = {};
	global.Serenity = global.Serenity || {};
	global.StudentIN = global.StudentIN || {};
	global.StudentIN.Administration = global.StudentIN.Administration || {};
	global.StudentIN.BasicSamples = global.StudentIN.BasicSamples || {};
	global.StudentIN.Common = global.StudentIN.Common || {};
	global.StudentIN.GeneralDefinitions = global.StudentIN.GeneralDefinitions || {};
	global.StudentIN.Membership = global.StudentIN.Membership || {};
	global.StudentIN.Northwind = global.StudentIN.Northwind || {};
	global.StudentIN.StudentMain = global.StudentIN.StudentMain || {};
	ss.initAssembly($asm, 'StudentIN.Script');
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.HtmlBasicContentEditor
	var $Serenity_HtmlBasicContentEditor = function(textArea, opt) {
		Serenity.HtmlContentEditor.call(this, textArea, opt);
	};
	$Serenity_HtmlBasicContentEditor.__typeName = 'Serenity.HtmlBasicContentEditor';
	global.Serenity.HtmlBasicContentEditor = $Serenity_HtmlBasicContentEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Authorization
	var $StudentIN_Authorization = function() {
	};
	$StudentIN_Authorization.__typeName = 'StudentIN.Authorization';
	$StudentIN_Authorization.get_userDefinition = function() {
		return Q.getRemoteData('UserData');
	};
	$StudentIN_Authorization.hasPermission = function(permissionKey) {
		return $StudentIN_Authorization.get_userDefinition().Username === 'admin' || !!$StudentIN_Authorization.get_userDefinition().Permissions[permissionKey];
	};
	global.StudentIN.Authorization = $StudentIN_Authorization;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicProgressDialog
	var $StudentIN_BasicProgressDialog = function() {
		this.$6$CancelledField = false;
		this.$6$CancelTitleField = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).call(this);
		var self = this;
		this.byId$1('ProgressBar').progressbar({
			max: 100,
			value: 0,
			change: function(e, v) {
				self.byId$1('ProgressLabel').text(self.get_value() + ' / ' + self.get_max());
			}
		});
	};
	$StudentIN_BasicProgressDialog.__typeName = 'StudentIN.BasicProgressDialog';
	global.StudentIN.BasicProgressDialog = $StudentIN_BasicProgressDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BulkServiceAction
	var $StudentIN_BulkServiceAction = function() {
		this.keys = null;
		this.queue = null;
		this.progressDialog = null;
		this.pendingRequests = 0;
		this.completedRequests = 0;
		this.$successCount = 0;
		this.$errorCount = 0;
		this.errorByKey = null;
		this.$2$DoneField = null;
		Serenity.ScriptContext.call(this);
	};
	$StudentIN_BulkServiceAction.__typeName = 'StudentIN.BulkServiceAction';
	global.StudentIN.BulkServiceAction = $StudentIN_BulkServiceAction;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.DialogUtils
	var $StudentIN_DialogUtils = function() {
	};
	$StudentIN_DialogUtils.__typeName = 'StudentIN.DialogUtils';
	$StudentIN_DialogUtils.pendingChangesConfirmation = function(element, hasPendingChanges) {
		element.bind('dialogbeforeclose', function(e) {
			if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
				return;
			}
			e.preventDefault();
			Q.confirm('You have pending changes. Save them?', function() {
				element.find('div.save-and-close-button').click();
			}, {
				onNo: function() {
					element.dialog().dialog('close');
				}
			});
		});
	};
	global.StudentIN.DialogUtils = $StudentIN_DialogUtils;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.LanguageList
	var $StudentIN_LanguageList = function() {
	};
	$StudentIN_LanguageList.__typeName = 'StudentIN.LanguageList';
	$StudentIN_LanguageList.get_value = function() {
		var result = [];
		var $t1 = Q.getLookup('Administration.Language').get_items();
		for (var $t2 = 0; $t2 < $t1.length; $t2++) {
			var k = $t1[$t2];
			if (k.LanguageId !== 'en') {
				result.push({ item1: k.Id.toString(), item2: k.LanguageName });
			}
		}
		return result;
	};
	global.StudentIN.LanguageList = $StudentIN_LanguageList;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.SchoolForm
	var $StudentIN_SchoolForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_SchoolForm.__typeName = 'StudentIN.SchoolForm';
	global.StudentIN.SchoolForm = $StudentIN_SchoolForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.ScriptInitialization
	var $StudentIN_ScriptInitialization = function() {
	};
	$StudentIN_ScriptInitialization.__typeName = 'StudentIN.ScriptInitialization';
	global.StudentIN.ScriptInitialization = $StudentIN_ScriptInitialization;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.LanguageDialog
	var $StudentIN_Administration_LanguageDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_Administration_LanguageDialog.__typeName = 'StudentIN.Administration.LanguageDialog';
	global.StudentIN.Administration.LanguageDialog = $StudentIN_Administration_LanguageDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.LanguageForm
	var $StudentIN_Administration_LanguageForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Administration_LanguageForm.__typeName = 'StudentIN.Administration.LanguageForm';
	global.StudentIN.Administration.LanguageForm = $StudentIN_Administration_LanguageForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.LanguageGrid
	var $StudentIN_Administration_LanguageGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Administration_LanguageGrid.__typeName = 'StudentIN.Administration.LanguageGrid';
	global.StudentIN.Administration.LanguageGrid = $StudentIN_Administration_LanguageGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.PermissionCheckEditor
	var $StudentIN_Administration_PermissionCheckEditor = function(div, opt) {
		this.$containsText = null;
		this.$byParentKey = null;
		this.$rolePermissions = null;
		ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).call(this, div, opt);
		this.$rolePermissions = {};
		var titleByKey = {};
		var permissionKeys = this.$getSortedGroupAndPermissionKeys(titleByKey);
		var items = [];
		for (var $t1 = 0; $t1 < permissionKeys.length; $t1++) {
			var key = permissionKeys[$t1];
			items.push({ Key: key, ParentKey: this.$getParentKey(key), Title: titleByKey.$[key], GrantRevoke: null, IsGroup: ss.endsWithString(key, ':') });
		}
		this.$byParentKey = Enumerable.from(items).toLookup(function(x) {
			return x.ParentKey;
		});
		this.$setItems(items);
	};
	$StudentIN_Administration_PermissionCheckEditor.__typeName = 'StudentIN.Administration.PermissionCheckEditor';
	global.StudentIN.Administration.PermissionCheckEditor = $StudentIN_Administration_PermissionCheckEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.PermissionModuleEditor
	var $StudentIN_Administration_PermissionModuleEditor = function(hidden) {
		ss.makeGenericType(Serenity.Select2Editor$2, [Object, String]).call(this, hidden, null);
		var modules = {};
		var permissions = Q.getRemoteData('Administration.PermissionKeys').Entities;
		for (var i = 0; i < permissions.length; i++) {
			var k = permissions[i];
			var idx1 = k.indexOf(String.fromCharCode(58));
			if (idx1 <= 0) {
				continue;
			}
			var idx2 = k.indexOf(String.fromCharCode(58), idx1 + 1);
			if (idx2 <= 0) {
				continue;
			}
			var module = k.substr(0, idx1);
			modules[module] = true;
		}
		var othersModule = false;
		for (var $t1 = 0; $t1 < permissions.length; $t1++) {
			var k1 = permissions[$t1];
			var idx11 = k1.indexOf(String.fromCharCode(58));
			if (idx11 < 0 && !ss.isValue(modules[k1])) {
				othersModule = true;
				break;
			}
		}
		var moduleList = [];
		ss.arrayAddRange(moduleList, Object.keys(modules));
		if (othersModule) {
			moduleList.push('Common');
		}
		for (var $t2 = 0; $t2 < moduleList.length; $t2++) {
			var k2 = moduleList[$t2];
			this.addItem$1(k2, k2, k2, false);
		}
	};
	$StudentIN_Administration_PermissionModuleEditor.__typeName = 'StudentIN.Administration.PermissionModuleEditor';
	global.StudentIN.Administration.PermissionModuleEditor = $StudentIN_Administration_PermissionModuleEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.RoleCheckEditor
	var $StudentIN_Administration_RoleCheckEditor = function(div) {
		this.$containsText = null;
		ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]).call(this, div, null);
	};
	$StudentIN_Administration_RoleCheckEditor.__typeName = 'StudentIN.Administration.RoleCheckEditor';
	global.StudentIN.Administration.RoleCheckEditor = $StudentIN_Administration_RoleCheckEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.RoleDialog
	var $StudentIN_Administration_RoleDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_Administration_RoleDialog.__typeName = 'StudentIN.Administration.RoleDialog';
	global.StudentIN.Administration.RoleDialog = $StudentIN_Administration_RoleDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.RoleForm
	var $StudentIN_Administration_RoleForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Administration_RoleForm.__typeName = 'StudentIN.Administration.RoleForm';
	global.StudentIN.Administration.RoleForm = $StudentIN_Administration_RoleForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.RoleGrid
	var $StudentIN_Administration_RoleGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Administration_RoleGrid.__typeName = 'StudentIN.Administration.RoleGrid';
	global.StudentIN.Administration.RoleGrid = $StudentIN_Administration_RoleGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.RolePermissionDialog
	var $StudentIN_Administration_RolePermissionDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $StudentIN_Administration_PermissionCheckEditor(this.byId$1('Permissions'), { showRevoke: false });
		Q.serviceRequest('Administration/RolePermission/List', { RoleID: this.options.roleID, Module: null, Submodule: null }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(Enumerable.from(response.Entities).select(function(x) {
				return { PermissionKey: x };
			}).toArray());
		}), null);
	};
	$StudentIN_Administration_RolePermissionDialog.__typeName = 'StudentIN.Administration.RolePermissionDialog';
	global.StudentIN.Administration.RolePermissionDialog = $StudentIN_Administration_RolePermissionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.TranslationGrid
	var $StudentIN_Administration_TranslationGrid = function(container) {
		this.$searchText = null;
		this.$sourceLanguage = null;
		this.$targetLanguage = null;
		this.$targetLanguageKey = null;
		this.$hasChanges = false;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
		this.element.on('keyup.' + this.uniqueName + ' change.' + this.uniqueName, 'input.custom-text', ss.mkdel(this, function(e) {
			var value = Q.trimToNull($(e.target).val());
			if (value === '') {
				value = null;
			}
			this.view.getItemById($(e.target).data('key')).CustomText = value;
			this.$hasChanges = true;
		}));
	};
	$StudentIN_Administration_TranslationGrid.__typeName = 'StudentIN.Administration.TranslationGrid';
	global.StudentIN.Administration.TranslationGrid = $StudentIN_Administration_TranslationGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.UserDialog
	var $StudentIN_Administration_UserDialog = function() {
		this.$form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$form = new $StudentIN_Administration_UserForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_password(), this.uniqueName, ss.mkdel(this, function(e) {
			if (this.$form.get_password().get_value().length < 7) {
				return 'Password must be at least 7 characters!';
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_passwordConfirm(), this.uniqueName, ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_password().get_value(), this.$form.get_passwordConfirm().get_value())) {
				return "The passwords entered doesn't match!";
			}
			return null;
		}));
	};
	$StudentIN_Administration_UserDialog.__typeName = 'StudentIN.Administration.UserDialog';
	global.StudentIN.Administration.UserDialog = $StudentIN_Administration_UserDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.UserForm
	var $StudentIN_Administration_UserForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Administration_UserForm.__typeName = 'StudentIN.Administration.UserForm';
	global.StudentIN.Administration.UserForm = $StudentIN_Administration_UserForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.UserGrid
	var $StudentIN_Administration_UserGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Administration_UserGrid.__typeName = 'StudentIN.Administration.UserGrid';
	global.StudentIN.Administration.UserGrid = $StudentIN_Administration_UserGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.UserPermissionDialog
	var $StudentIN_Administration_UserPermissionDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $StudentIN_Administration_PermissionCheckEditor(this.byId$1('Permissions'), { showRevoke: true });
		Q.serviceRequest('Administration/UserPermission/List', { UserID: this.options.userID, Module: null, Submodule: null }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(response.Entities);
		}), null);
		Q.serviceRequest('Administration/UserPermission/ListRolePermissions', { UserID: this.options.userID, Module: null, Submodule: null }, ss.mkdel(this, function(response1) {
			this.$permissions.set_rolePermissions(response1.Entities);
		}), null);
	};
	$StudentIN_Administration_UserPermissionDialog.__typeName = 'StudentIN.Administration.UserPermissionDialog';
	global.StudentIN.Administration.UserPermissionDialog = $StudentIN_Administration_UserPermissionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Administration.UserRoleDialog
	var $StudentIN_Administration_UserRoleDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $StudentIN_Administration_RoleCheckEditor(this.byId$1('Roles'));
		Q.serviceRequest('Administration/UserRole/List', { UserID: this.options.userID }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(Enumerable.from(response.Entities).select(function(x) {
				return x.toString();
			}).toArray());
		}), null);
	};
	$StudentIN_Administration_UserRoleDialog.__typeName = 'StudentIN.Administration.UserRoleDialog';
	global.StudentIN.Administration.UserRoleDialog = $StudentIN_Administration_UserRoleDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.CancellableBulkActionGrid
	var $StudentIN_BasicSamples_CancellableBulkActionGrid = function(container) {
		this.$rowSelection = null;
		$StudentIN_Northwind_OrderGrid.call(this, container);
	};
	$StudentIN_BasicSamples_CancellableBulkActionGrid.__typeName = 'StudentIN.BasicSamples.CancellableBulkActionGrid';
	global.StudentIN.BasicSamples.CancellableBulkActionGrid = $StudentIN_BasicSamples_CancellableBulkActionGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.ChartInDialog
	var $StudentIN_BasicSamples_ChartInDialog = function() {
		this.$areaChart = null;
		Serenity.TemplatedDialog.call(this);
	};
	$StudentIN_BasicSamples_ChartInDialog.__typeName = 'StudentIN.BasicSamples.ChartInDialog';
	$StudentIN_BasicSamples_ChartInDialog.initializePage = function() {
		$(function() {
			$('#LaunchDialogButton').click(function(e) {
				(new $StudentIN_BasicSamples_ChartInDialog()).dialogOpen();
			});
		});
	};
	global.StudentIN.BasicSamples.ChartInDialog = $StudentIN_BasicSamples_ChartInDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.CloneableEntityDialog
	var $StudentIN_BasicSamples_CloneableEntityDialog = function() {
		$StudentIN_Northwind_ProductDialog.call(this);
	};
	$StudentIN_BasicSamples_CloneableEntityDialog.__typeName = 'StudentIN.BasicSamples.CloneableEntityDialog';
	global.StudentIN.BasicSamples.CloneableEntityDialog = $StudentIN_BasicSamples_CloneableEntityDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.CloneableEntityGrid
	var $StudentIN_BasicSamples_CloneableEntityGrid = function(container) {
		$StudentIN_Northwind_ProductGrid.call(this, container);
	};
	$StudentIN_BasicSamples_CloneableEntityGrid.__typeName = 'StudentIN.BasicSamples.CloneableEntityGrid';
	global.StudentIN.BasicSamples.CloneableEntityGrid = $StudentIN_BasicSamples_CloneableEntityGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.LookupFilterByMultipleDialog
	var $StudentIN_BasicSamples_LookupFilterByMultipleDialog = function() {
		$StudentIN_Northwind_ProductDialog.call(this);
	};
	$StudentIN_BasicSamples_LookupFilterByMultipleDialog.__typeName = 'StudentIN.BasicSamples.LookupFilterByMultipleDialog';
	global.StudentIN.BasicSamples.LookupFilterByMultipleDialog = $StudentIN_BasicSamples_LookupFilterByMultipleDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.LookupFilterByMultipleForm
	var $StudentIN_BasicSamples_LookupFilterByMultipleForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_BasicSamples_LookupFilterByMultipleForm.__typeName = 'StudentIN.BasicSamples.LookupFilterByMultipleForm';
	global.StudentIN.BasicSamples.LookupFilterByMultipleForm = $StudentIN_BasicSamples_LookupFilterByMultipleForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.LookupFilterByMultipleGrid
	var $StudentIN_BasicSamples_LookupFilterByMultipleGrid = function(container) {
		$StudentIN_Northwind_ProductGrid.call(this, container);
	};
	$StudentIN_BasicSamples_LookupFilterByMultipleGrid.__typeName = 'StudentIN.BasicSamples.LookupFilterByMultipleGrid';
	global.StudentIN.BasicSamples.LookupFilterByMultipleGrid = $StudentIN_BasicSamples_LookupFilterByMultipleGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.MultiColumnDialog
	var $StudentIN_BasicSamples_MultiColumnDialog = function() {
		$StudentIN_Northwind_OrderDialog.call(this);
		// as these editors are in a three column line, 
		// all should grow 0.5px when dialog grows 1px
		Serenity.FLX.flexXFactor(this.form.get_orderDate().get_element(), 0.5);
		Serenity.FLX.flexXFactor(this.form.get_requiredDate().get_element(), 0.5);
		Serenity.FLX.flexXFactor(this.form.get_shipName().get_element(), 0.5);
		Serenity.FLX.flexXFactor(this.form.get_shipCity().get_element(), 0.5);
		Serenity.FLX.flexXFactor(this.form.get_shipPostalCode().get_element(), 0.5);
		Serenity.FLX.flexXFactor(this.form.get_shipAddress().get_element(), 0.5);
		Serenity.FLX.flexXFactor(this.form.get_shipRegion().get_element(), 0.5);
		Serenity.FLX.flexXFactor(this.form.get_shipCountry().get_element(), 0.5);
		// as these editors are in a three column line, 
		// all should grow 0.33px when dialog grows 1px
		Serenity.FLX.flexXFactor(this.form.get_shippedDate().get_element(), 0.33);
		Serenity.FLX.flexXFactor(this.form.get_shipVia().get_element().siblings('.select2-container'), 0.33);
		Serenity.FLX.flexXFactor(this.form.get_freight().get_element(), 0.33);
		// grid should grow in height and width when dialog grows
		Serenity.FLX.flexWidthHeight(this.form.get_detailList().get_element(), 1, 1);
	};
	$StudentIN_BasicSamples_MultiColumnDialog.__typeName = 'StudentIN.BasicSamples.MultiColumnDialog';
	global.StudentIN.BasicSamples.MultiColumnDialog = $StudentIN_BasicSamples_MultiColumnDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.MultiColumnGrid
	var $StudentIN_BasicSamples_MultiColumnGrid = function(container) {
		$StudentIN_Northwind_OrderGrid.call(this, container);
	};
	$StudentIN_BasicSamples_MultiColumnGrid.__typeName = 'StudentIN.BasicSamples.MultiColumnGrid';
	global.StudentIN.BasicSamples.MultiColumnGrid = $StudentIN_BasicSamples_MultiColumnGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.MultiColumnResponsiveDialog
	var $StudentIN_BasicSamples_MultiColumnResponsiveDialog = function() {
		$StudentIN_Northwind_OrderDialog.call(this);
	};
	$StudentIN_BasicSamples_MultiColumnResponsiveDialog.__typeName = 'StudentIN.BasicSamples.MultiColumnResponsiveDialog';
	global.StudentIN.BasicSamples.MultiColumnResponsiveDialog = $StudentIN_BasicSamples_MultiColumnResponsiveDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.MultiColumnResponsiveGrid
	var $StudentIN_BasicSamples_MultiColumnResponsiveGrid = function(container) {
		$StudentIN_Northwind_OrderGrid.call(this, container);
	};
	$StudentIN_BasicSamples_MultiColumnResponsiveGrid.__typeName = 'StudentIN.BasicSamples.MultiColumnResponsiveGrid';
	global.StudentIN.BasicSamples.MultiColumnResponsiveGrid = $StudentIN_BasicSamples_MultiColumnResponsiveGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.OrderBulkAction
	var $StudentIN_BasicSamples_OrderBulkAction = function() {
		$StudentIN_BulkServiceAction.call(this);
	};
	$StudentIN_BasicSamples_OrderBulkAction.__typeName = 'StudentIN.BasicSamples.OrderBulkAction';
	global.StudentIN.BasicSamples.OrderBulkAction = $StudentIN_BasicSamples_OrderBulkAction;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.ProduceSeafoodCategoryEditor
	var $StudentIN_BasicSamples_ProduceSeafoodCategoryEditor = function(hidden, opt) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).$ctor1.call(this, hidden, opt);
	};
	$StudentIN_BasicSamples_ProduceSeafoodCategoryEditor.__typeName = 'StudentIN.BasicSamples.ProduceSeafoodCategoryEditor';
	global.StudentIN.BasicSamples.ProduceSeafoodCategoryEditor = $StudentIN_BasicSamples_ProduceSeafoodCategoryEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.ResponsiveDialog
	var $StudentIN_BasicSamples_ResponsiveDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_BasicSamples_ResponsiveDialog.__typeName = 'StudentIN.BasicSamples.ResponsiveDialog';
	global.StudentIN.BasicSamples.ResponsiveDialog = $StudentIN_BasicSamples_ResponsiveDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.ResponsiveGrid
	var $StudentIN_BasicSamples_ResponsiveGrid = function(container) {
		$StudentIN_Northwind_OrderGrid.call(this, container);
	};
	$StudentIN_BasicSamples_ResponsiveGrid.__typeName = 'StudentIN.BasicSamples.ResponsiveGrid';
	global.StudentIN.BasicSamples.ResponsiveGrid = $StudentIN_BasicSamples_ResponsiveGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.BasicSamples.ViewWithoutIDGrid
	var $StudentIN_BasicSamples_ViewWithoutIDGrid = function(container) {
		this.$nextId = 1;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_BasicSamples_ViewWithoutIDGrid.__typeName = 'StudentIN.BasicSamples.ViewWithoutIDGrid';
	global.StudentIN.BasicSamples.ViewWithoutIDGrid = $StudentIN_BasicSamples_ViewWithoutIDGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Common.ExcelExportHelper
	var $StudentIN_Common_ExcelExportHelper = function() {
	};
	$StudentIN_Common_ExcelExportHelper.__typeName = 'StudentIN.Common.ExcelExportHelper';
	$StudentIN_Common_ExcelExportHelper.createToolButton = function(grid, service, onViewSubmit, title) {
		return {
			title: title,
			cssClass: 'export-xlsx-button',
			onClick: function() {
				if (!onViewSubmit()) {
					return;
				}
				var request = Q.deepClone(grid.getView().params);
				request.Take = 0;
				request.Skip = 0;
				var sortBy = grid.getView().sortBy;
				if (ss.isValue(sortBy)) {
					request.Sort = sortBy;
				}
				request.IncludeColumns = [];
				var $t1 = grid.getGrid().getColumns();
				for (var $t2 = 0; $t2 < $t1.length; $t2++) {
					var column = $t1[$t2];
					var $t4 = request.IncludeColumns;
					var $t3 = column.id;
					if (ss.isNullOrUndefined($t3)) {
						$t3 = column.field;
					}
					$t4.push($t3);
				}
				Q.postToService({ service: service, request: request, target: '_blank' });
			}
		};
	};
	global.StudentIN.Common.ExcelExportHelper = $StudentIN_Common_ExcelExportHelper;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Common.GridEditorBase
	var $StudentIN_Common_GridEditorBase$1 = function(TEntity) {
		var $type = function(container) {
			this.$nextId = 1;
			ss.makeGenericType(Serenity.EntityGrid$1, [TEntity]).call(this, container);
		};
		ss.registerGenericClassInstance($type, $StudentIN_Common_GridEditorBase$1, [TEntity], {
			id: function(entity) {
				return ss.cast(entity.__id, ss.Int32);
			},
			save: function(opt, callback) {
				var request = opt.request;
				var row = Q.deepClone(request.Entity);
				var id = ss.cast(row.__id, ss.Int32);
				if (ss.isNullOrUndefined(id)) {
					row.__id = this.$nextId++;
				}
				if (!this.validateEntity(row, id)) {
					return;
				}
				var items = ss.arrayClone(this.view.getItems());
				if (ss.isNullOrUndefined(id)) {
					items.push(row);
				}
				else {
					var index = Enumerable.from(items).indexOf(ss.mkdel(this, function(x) {
						return this.id(x) === ss.unbox(id);
					}));
					items[index] = Q.deepClone(ss.createInstance(TEntity), items[index], row);
				}
				this.setEntities(items);
				callback({});
			},
			deleteEntity: function(id) {
				this.view.deleteItem(id);
				return true;
			},
			validateEntity: function(row, id) {
				return true;
			},
			setEntities: function(items) {
				this.view.setItems(items, true);
			},
			getNewEntity: function() {
				return ss.createInstance(TEntity);
			},
			getButtons: function() {
				var $t1 = [];
				$t1.push({ title: this.getAddButtonCaption(), cssClass: 'add-button', onClick: ss.mkdel(this, function() {
					this.createEntityDialog(this.getItemType(), ss.mkdel(this, function(dlg) {
						var dialog = ss.cast(dlg, ss.makeGenericType($StudentIN_Common_GridEditorDialog$1, [TEntity]));
						dialog.set_onSave(ss.mkdel(this, this.save));
						dialog.loadEntityAndOpenDialog(this.getNewEntity());
					}));
				}) });
				return $t1;
			},
			editItem: function(entityOrId) {
				var id = ss.unbox(Serenity.IdExtensions.toInt32(entityOrId));
				var item = this.view.getItemById(id);
				this.createEntityDialog(this.getItemType(), ss.mkdel(this, function(dlg) {
					var dialog = ss.cast(dlg, ss.makeGenericType($StudentIN_Common_GridEditorDialog$1, [TEntity]));
					dialog.set_onDelete(ss.mkdel(this, function(opt, callback) {
						if (!this.deleteEntity(id)) {
							return;
						}
						callback({});
					}));
					dialog.set_onSave(ss.mkdel(this, this.save));
					dialog.loadEntityAndOpenDialog(item);
				}));
			},
			getEditValue: function(property, target) {
				target[property.name] = this.get_value();
			},
			setEditValue: function(source, property) {
				this.set_value(ss.cast(source[property.name], Array));
			},
			get_value: function() {
				return Enumerable.from(this.view.getItems()).select(function(x) {
					var y = Q.deepClone(x);
					delete y['__id'];
					return y;
				}).toArray();
			},
			set_value: function(value) {
				this.view.setItems(Enumerable.from(value || []).select(ss.mkdel(this, function(x) {
					var y = Q.deepClone(x);
					y.__id = this.$nextId++;
					return y;
				})).toArray(), true);
			},
			getGridCanLoad: function() {
				return false;
			},
			usePager: function() {
				return false;
			},
			getInitialTitle: function() {
				return null;
			},
			createQuickSearchInput: function() {
			}
		}, function() {
			return ss.makeGenericType(Serenity.EntityGrid$1, [TEntity]);
		}, function() {
			return [Serenity.IDataGrid, Serenity.ISetEditValue, Serenity.IGetEditValue];
		});
		ss.setMetadata($type, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.EditorAttribute(), new Serenity.IdPropertyAttribute('__id')] });
		return $type;
	};
	$StudentIN_Common_GridEditorBase$1.__typeName = 'StudentIN.Common.GridEditorBase$1';
	ss.initGenericClass($StudentIN_Common_GridEditorBase$1, $asm, 1);
	global.StudentIN.Common.GridEditorBase$1 = $StudentIN_Common_GridEditorBase$1;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Common.GridEditorDialog
	var $StudentIN_Common_GridEditorDialog$1 = function(TEntity) {
		var $type = function() {
			this.$8$OnSaveField = null;
			this.$8$OnDeleteField = null;
			ss.makeGenericType(Serenity.EntityDialog$1, [TEntity]).call(this);
		};
		ss.registerGenericClassInstance($type, $StudentIN_Common_GridEditorDialog$1, [TEntity], {
			destroy: function() {
				this.set_onSave(null);
				this.set_onDelete(null);
				ss.makeGenericType(Serenity.EntityDialog$2, [TEntity, Object]).prototype.destroy.call(this);
			},
			updateInterface: function() {
				ss.makeGenericType(Serenity.EntityDialog$2, [TEntity, Object]).prototype.updateInterface.call(this);
				// apply changes button doesn't work properly with in-memory grids yet
				if (ss.isValue(this.applyChangesButton)) {
					this.applyChangesButton.hide();
				}
			},
			saveHandler: function(options, callback) {
				if (!ss.staticEquals(this.get_onSave(), null)) {
					this.get_onSave()(options, callback);
				}
			},
			deleteHandler: function(options, callback) {
				if (!ss.staticEquals(this.get_onDelete(), null)) {
					this.get_onDelete()(options, callback);
				}
			},
			get_onSave: function() {
				return this.$8$OnSaveField;
			},
			set_onSave: function(value) {
				this.$8$OnSaveField = value;
			},
			get_onDelete: function() {
				return this.$8$OnDeleteField;
			},
			set_onDelete: function(value) {
				this.$8$OnDeleteField = value;
			}
		}, function() {
			return ss.makeGenericType(Serenity.EntityDialog$1, [TEntity]);
		}, function() {
			return [Serenity.IDialog, Serenity.IEditDialog];
		});
		ss.setMetadata($type, { attr: [new Serenity.IdPropertyAttribute('__id')] });
		return $type;
	};
	$StudentIN_Common_GridEditorDialog$1.__typeName = 'StudentIN.Common.GridEditorDialog$1';
	ss.initGenericClass($StudentIN_Common_GridEditorDialog$1, $asm, 1);
	global.StudentIN.Common.GridEditorDialog$1 = $StudentIN_Common_GridEditorDialog$1;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Common.LanguageSelection
	var $StudentIN_Common_LanguageSelection = function(select, currentLanguage) {
		Serenity.Widget.call(this, select);
		currentLanguage = ss.coalesce(currentLanguage, 'en');
		var self = this;
		Serenity.WX.change(this, function(e) {
			$.cookie('LanguagePreference', select.val(), { path: Q$Config.applicationPath, expires: 365 });
			window.location.reload(true);
		});
		Q.getLookupAsync('Administration.Language').then(function(x) {
			if (!Enumerable.from(x.get_items()).any(function(z) {
				return ss.referenceEquals(z.LanguageId, currentLanguage);
			})) {
				var idx = currentLanguage.lastIndexOf('-');
				if (idx >= 0) {
					currentLanguage = currentLanguage.substr(0, idx);
					if (!Enumerable.from(x.get_items()).any(function(z1) {
						return ss.referenceEquals(z1.LanguageId, currentLanguage);
					})) {
						currentLanguage = 'en';
					}
				}
				else {
					currentLanguage = 'en';
				}
			}
			var $t1 = x.get_items();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var l = $t1[$t2];
				Q.addOption(select, l.LanguageId, l.LanguageName);
			}
			select.val(currentLanguage);
		}, null);
	};
	$StudentIN_Common_LanguageSelection.__typeName = 'StudentIN.Common.LanguageSelection';
	global.StudentIN.Common.LanguageSelection = $StudentIN_Common_LanguageSelection;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Common.ReportHelper
	var $StudentIN_Common_ReportHelper = function() {
	};
	$StudentIN_Common_ReportHelper.__typeName = 'StudentIN.Common.ReportHelper';
	$StudentIN_Common_ReportHelper.createRenderButton = function(reportKey, title, cssClass, extension, options) {
		return {
			title: title,
			cssClass: cssClass,
			onClick: function() {
				Q.postToUrl({ url: '~/Report/Render', params: { key: reportKey, ext: extension, opt: (ss.staticEquals(options, null) ? '' : $.toJSON(options())) }, target: '_blank' });
			}
		};
	};
	global.StudentIN.Common.ReportHelper = $StudentIN_Common_ReportHelper;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Common.SidebarSearch
	var $StudentIN_Common_SidebarSearch = function(input, menuUL) {
		this.$menuUL = null;
		Serenity.Widget.call(this, input);
		var self = this;
		var $t1 = Serenity.QuickSearchInputOptions.$ctor();
		$t1.onSearch = function(field, text, success) {
			self.$updateMatchFlags(text);
			success(true);
		};
		new Serenity.QuickSearchInput(input, $t1);
		this.$menuUL = menuUL;
	};
	$StudentIN_Common_SidebarSearch.__typeName = 'StudentIN.Common.SidebarSearch';
	global.StudentIN.Common.SidebarSearch = $StudentIN_Common_SidebarSearch;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Common.ThemeSelection
	var $StudentIN_Common_ThemeSelection = function(select) {
		Serenity.Widget.call(this, select);
		var self = this;
		Serenity.WX.change(this, ss.mkdel(this, function(e) {
			$.cookie('ThemePreference', select.val(), { path: Q$Config.applicationPath, expires: 365 });
			$('body').removeClass('skin-' + this.$getCurrentTheme());
			$('body').addClass('skin-' + select.val());
		}));
		Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
		Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
		Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
		Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
		Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
		Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
		Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
		Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
		Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
		Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
		Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
		Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
		select.val(this.$getCurrentTheme());
	};
	$StudentIN_Common_ThemeSelection.__typeName = 'StudentIN.Common.ThemeSelection';
	global.StudentIN.Common.ThemeSelection = $StudentIN_Common_ThemeSelection;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.CityDialog
	var $StudentIN_GeneralDefinitions_CityDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_GeneralDefinitions_CityForm(this.get_idPrefix());
	};
	$StudentIN_GeneralDefinitions_CityDialog.__typeName = 'StudentIN.GeneralDefinitions.CityDialog';
	global.StudentIN.GeneralDefinitions.CityDialog = $StudentIN_GeneralDefinitions_CityDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.CityEditor
	var $StudentIN_GeneralDefinitions_CityEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
	};
	$StudentIN_GeneralDefinitions_CityEditor.__typeName = 'StudentIN.GeneralDefinitions.CityEditor';
	global.StudentIN.GeneralDefinitions.CityEditor = $StudentIN_GeneralDefinitions_CityEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.CityForm
	var $StudentIN_GeneralDefinitions_CityForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_GeneralDefinitions_CityForm.__typeName = 'StudentIN.GeneralDefinitions.CityForm';
	global.StudentIN.GeneralDefinitions.CityForm = $StudentIN_GeneralDefinitions_CityForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.CityGrid
	var $StudentIN_GeneralDefinitions_CityGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_GeneralDefinitions_CityGrid.__typeName = 'StudentIN.GeneralDefinitions.CityGrid';
	global.StudentIN.GeneralDefinitions.CityGrid = $StudentIN_GeneralDefinitions_CityGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.ClassDialog
	var $StudentIN_GeneralDefinitions_ClassDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_GeneralDefinitions_ClassForm(this.get_idPrefix());
	};
	$StudentIN_GeneralDefinitions_ClassDialog.__typeName = 'StudentIN.GeneralDefinitions.ClassDialog';
	global.StudentIN.GeneralDefinitions.ClassDialog = $StudentIN_GeneralDefinitions_ClassDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.ClassEditor
	var $StudentIN_GeneralDefinitions_ClassEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
	};
	$StudentIN_GeneralDefinitions_ClassEditor.__typeName = 'StudentIN.GeneralDefinitions.ClassEditor';
	global.StudentIN.GeneralDefinitions.ClassEditor = $StudentIN_GeneralDefinitions_ClassEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.ClassForm
	var $StudentIN_GeneralDefinitions_ClassForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_GeneralDefinitions_ClassForm.__typeName = 'StudentIN.GeneralDefinitions.ClassForm';
	global.StudentIN.GeneralDefinitions.ClassForm = $StudentIN_GeneralDefinitions_ClassForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.ClassGrid
	var $StudentIN_GeneralDefinitions_ClassGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_GeneralDefinitions_ClassGrid.__typeName = 'StudentIN.GeneralDefinitions.ClassGrid';
	global.StudentIN.GeneralDefinitions.ClassGrid = $StudentIN_GeneralDefinitions_ClassGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.ConsultantDialog
	var $StudentIN_GeneralDefinitions_ConsultantDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_GeneralDefinitions_ConsultantForm(this.get_idPrefix());
	};
	$StudentIN_GeneralDefinitions_ConsultantDialog.__typeName = 'StudentIN.GeneralDefinitions.ConsultantDialog';
	global.StudentIN.GeneralDefinitions.ConsultantDialog = $StudentIN_GeneralDefinitions_ConsultantDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.ConsultantEditor
	var $StudentIN_GeneralDefinitions_ConsultantEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
	};
	$StudentIN_GeneralDefinitions_ConsultantEditor.__typeName = 'StudentIN.GeneralDefinitions.ConsultantEditor';
	global.StudentIN.GeneralDefinitions.ConsultantEditor = $StudentIN_GeneralDefinitions_ConsultantEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.ConsultantForm
	var $StudentIN_GeneralDefinitions_ConsultantForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_GeneralDefinitions_ConsultantForm.__typeName = 'StudentIN.GeneralDefinitions.ConsultantForm';
	global.StudentIN.GeneralDefinitions.ConsultantForm = $StudentIN_GeneralDefinitions_ConsultantForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.ConsultantGrid
	var $StudentIN_GeneralDefinitions_ConsultantGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_GeneralDefinitions_ConsultantGrid.__typeName = 'StudentIN.GeneralDefinitions.ConsultantGrid';
	global.StudentIN.GeneralDefinitions.ConsultantGrid = $StudentIN_GeneralDefinitions_ConsultantGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.DepartmentDialog
	var $StudentIN_GeneralDefinitions_DepartmentDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_GeneralDefinitions_DepartmentForm(this.get_idPrefix());
	};
	$StudentIN_GeneralDefinitions_DepartmentDialog.__typeName = 'StudentIN.GeneralDefinitions.DepartmentDialog';
	global.StudentIN.GeneralDefinitions.DepartmentDialog = $StudentIN_GeneralDefinitions_DepartmentDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.DepartmentEditor
	var $StudentIN_GeneralDefinitions_DepartmentEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
	};
	$StudentIN_GeneralDefinitions_DepartmentEditor.__typeName = 'StudentIN.GeneralDefinitions.DepartmentEditor';
	global.StudentIN.GeneralDefinitions.DepartmentEditor = $StudentIN_GeneralDefinitions_DepartmentEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.DepartmentForm
	var $StudentIN_GeneralDefinitions_DepartmentForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_GeneralDefinitions_DepartmentForm.__typeName = 'StudentIN.GeneralDefinitions.DepartmentForm';
	global.StudentIN.GeneralDefinitions.DepartmentForm = $StudentIN_GeneralDefinitions_DepartmentForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.DepartmentGrid
	var $StudentIN_GeneralDefinitions_DepartmentGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_GeneralDefinitions_DepartmentGrid.__typeName = 'StudentIN.GeneralDefinitions.DepartmentGrid';
	global.StudentIN.GeneralDefinitions.DepartmentGrid = $StudentIN_GeneralDefinitions_DepartmentGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.OccupationDialog
	var $StudentIN_GeneralDefinitions_OccupationDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_GeneralDefinitions_OccupationForm(this.get_idPrefix());
	};
	$StudentIN_GeneralDefinitions_OccupationDialog.__typeName = 'StudentIN.GeneralDefinitions.OccupationDialog';
	global.StudentIN.GeneralDefinitions.OccupationDialog = $StudentIN_GeneralDefinitions_OccupationDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.OccupationEditor
	var $StudentIN_GeneralDefinitions_OccupationEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
	};
	$StudentIN_GeneralDefinitions_OccupationEditor.__typeName = 'StudentIN.GeneralDefinitions.OccupationEditor';
	global.StudentIN.GeneralDefinitions.OccupationEditor = $StudentIN_GeneralDefinitions_OccupationEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.OccupationForm
	var $StudentIN_GeneralDefinitions_OccupationForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_GeneralDefinitions_OccupationForm.__typeName = 'StudentIN.GeneralDefinitions.OccupationForm';
	global.StudentIN.GeneralDefinitions.OccupationForm = $StudentIN_GeneralDefinitions_OccupationForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.OccupationGrid
	var $StudentIN_GeneralDefinitions_OccupationGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_GeneralDefinitions_OccupationGrid.__typeName = 'StudentIN.GeneralDefinitions.OccupationGrid';
	global.StudentIN.GeneralDefinitions.OccupationGrid = $StudentIN_GeneralDefinitions_OccupationGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.PaymentTypeDialog
	var $StudentIN_GeneralDefinitions_PaymentTypeDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_GeneralDefinitions_PaymentTypeForm(this.get_idPrefix());
	};
	$StudentIN_GeneralDefinitions_PaymentTypeDialog.__typeName = 'StudentIN.GeneralDefinitions.PaymentTypeDialog';
	global.StudentIN.GeneralDefinitions.PaymentTypeDialog = $StudentIN_GeneralDefinitions_PaymentTypeDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.PaymentTypeEditor
	var $StudentIN_GeneralDefinitions_PaymentTypeEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
	};
	$StudentIN_GeneralDefinitions_PaymentTypeEditor.__typeName = 'StudentIN.GeneralDefinitions.PaymentTypeEditor';
	global.StudentIN.GeneralDefinitions.PaymentTypeEditor = $StudentIN_GeneralDefinitions_PaymentTypeEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.PaymentTypeForm
	var $StudentIN_GeneralDefinitions_PaymentTypeForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_GeneralDefinitions_PaymentTypeForm.__typeName = 'StudentIN.GeneralDefinitions.PaymentTypeForm';
	global.StudentIN.GeneralDefinitions.PaymentTypeForm = $StudentIN_GeneralDefinitions_PaymentTypeForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.PaymentTypeGrid
	var $StudentIN_GeneralDefinitions_PaymentTypeGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_GeneralDefinitions_PaymentTypeGrid.__typeName = 'StudentIN.GeneralDefinitions.PaymentTypeGrid';
	global.StudentIN.GeneralDefinitions.PaymentTypeGrid = $StudentIN_GeneralDefinitions_PaymentTypeGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.RecordStateDialog
	var $StudentIN_GeneralDefinitions_RecordStateDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_GeneralDefinitions_RecordStateForm(this.get_idPrefix());
	};
	$StudentIN_GeneralDefinitions_RecordStateDialog.__typeName = 'StudentIN.GeneralDefinitions.RecordStateDialog';
	global.StudentIN.GeneralDefinitions.RecordStateDialog = $StudentIN_GeneralDefinitions_RecordStateDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.RecordStateEditor
	var $StudentIN_GeneralDefinitions_RecordStateEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
	};
	$StudentIN_GeneralDefinitions_RecordStateEditor.__typeName = 'StudentIN.GeneralDefinitions.RecordStateEditor';
	global.StudentIN.GeneralDefinitions.RecordStateEditor = $StudentIN_GeneralDefinitions_RecordStateEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.RecordStateForm
	var $StudentIN_GeneralDefinitions_RecordStateForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_GeneralDefinitions_RecordStateForm.__typeName = 'StudentIN.GeneralDefinitions.RecordStateForm';
	global.StudentIN.GeneralDefinitions.RecordStateForm = $StudentIN_GeneralDefinitions_RecordStateForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.RecordStateGrid
	var $StudentIN_GeneralDefinitions_RecordStateGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_GeneralDefinitions_RecordStateGrid.__typeName = 'StudentIN.GeneralDefinitions.RecordStateGrid';
	global.StudentIN.GeneralDefinitions.RecordStateGrid = $StudentIN_GeneralDefinitions_RecordStateGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.RelativeDialog
	var $StudentIN_GeneralDefinitions_RelativeDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_GeneralDefinitions_RelativeForm(this.get_idPrefix());
	};
	$StudentIN_GeneralDefinitions_RelativeDialog.__typeName = 'StudentIN.GeneralDefinitions.RelativeDialog';
	global.StudentIN.GeneralDefinitions.RelativeDialog = $StudentIN_GeneralDefinitions_RelativeDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.RelativeEditor
	var $StudentIN_GeneralDefinitions_RelativeEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
	};
	$StudentIN_GeneralDefinitions_RelativeEditor.__typeName = 'StudentIN.GeneralDefinitions.RelativeEditor';
	global.StudentIN.GeneralDefinitions.RelativeEditor = $StudentIN_GeneralDefinitions_RelativeEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.RelativeForm
	var $StudentIN_GeneralDefinitions_RelativeForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_GeneralDefinitions_RelativeForm.__typeName = 'StudentIN.GeneralDefinitions.RelativeForm';
	global.StudentIN.GeneralDefinitions.RelativeForm = $StudentIN_GeneralDefinitions_RelativeForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.RelativeGrid
	var $StudentIN_GeneralDefinitions_RelativeGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_GeneralDefinitions_RelativeGrid.__typeName = 'StudentIN.GeneralDefinitions.RelativeGrid';
	global.StudentIN.GeneralDefinitions.RelativeGrid = $StudentIN_GeneralDefinitions_RelativeGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.SchoolDialog
	var $StudentIN_GeneralDefinitions_SchoolDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_GeneralDefinitions_SchoolForm(this.get_idPrefix());
	};
	$StudentIN_GeneralDefinitions_SchoolDialog.__typeName = 'StudentIN.GeneralDefinitions.SchoolDialog';
	global.StudentIN.GeneralDefinitions.SchoolDialog = $StudentIN_GeneralDefinitions_SchoolDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.SchoolEditor
	var $StudentIN_GeneralDefinitions_SchoolEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
	};
	$StudentIN_GeneralDefinitions_SchoolEditor.__typeName = 'StudentIN.GeneralDefinitions.SchoolEditor';
	global.StudentIN.GeneralDefinitions.SchoolEditor = $StudentIN_GeneralDefinitions_SchoolEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.SchoolForm
	var $StudentIN_GeneralDefinitions_SchoolForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_GeneralDefinitions_SchoolForm.__typeName = 'StudentIN.GeneralDefinitions.SchoolForm';
	global.StudentIN.GeneralDefinitions.SchoolForm = $StudentIN_GeneralDefinitions_SchoolForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.SchoolGrid
	var $StudentIN_GeneralDefinitions_SchoolGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_GeneralDefinitions_SchoolGrid.__typeName = 'StudentIN.GeneralDefinitions.SchoolGrid';
	global.StudentIN.GeneralDefinitions.SchoolGrid = $StudentIN_GeneralDefinitions_SchoolGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.SchoolGroupDialog
	var $StudentIN_GeneralDefinitions_SchoolGroupDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_GeneralDefinitions_SchoolGroupForm(this.get_idPrefix());
	};
	$StudentIN_GeneralDefinitions_SchoolGroupDialog.__typeName = 'StudentIN.GeneralDefinitions.SchoolGroupDialog';
	global.StudentIN.GeneralDefinitions.SchoolGroupDialog = $StudentIN_GeneralDefinitions_SchoolGroupDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.SchoolGroupEditor
	var $StudentIN_GeneralDefinitions_SchoolGroupEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
	};
	$StudentIN_GeneralDefinitions_SchoolGroupEditor.__typeName = 'StudentIN.GeneralDefinitions.SchoolGroupEditor';
	global.StudentIN.GeneralDefinitions.SchoolGroupEditor = $StudentIN_GeneralDefinitions_SchoolGroupEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.SchoolGroupForm
	var $StudentIN_GeneralDefinitions_SchoolGroupForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_GeneralDefinitions_SchoolGroupForm.__typeName = 'StudentIN.GeneralDefinitions.SchoolGroupForm';
	global.StudentIN.GeneralDefinitions.SchoolGroupForm = $StudentIN_GeneralDefinitions_SchoolGroupForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.SchoolGroupGrid
	var $StudentIN_GeneralDefinitions_SchoolGroupGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_GeneralDefinitions_SchoolGroupGrid.__typeName = 'StudentIN.GeneralDefinitions.SchoolGroupGrid';
	global.StudentIN.GeneralDefinitions.SchoolGroupGrid = $StudentIN_GeneralDefinitions_SchoolGroupGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.SectionDialog
	var $StudentIN_GeneralDefinitions_SectionDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_GeneralDefinitions_SectionForm(this.get_idPrefix());
	};
	$StudentIN_GeneralDefinitions_SectionDialog.__typeName = 'StudentIN.GeneralDefinitions.SectionDialog';
	global.StudentIN.GeneralDefinitions.SectionDialog = $StudentIN_GeneralDefinitions_SectionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.SectionEditor
	var $StudentIN_GeneralDefinitions_SectionEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
	};
	$StudentIN_GeneralDefinitions_SectionEditor.__typeName = 'StudentIN.GeneralDefinitions.SectionEditor';
	global.StudentIN.GeneralDefinitions.SectionEditor = $StudentIN_GeneralDefinitions_SectionEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.SectionForm
	var $StudentIN_GeneralDefinitions_SectionForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_GeneralDefinitions_SectionForm.__typeName = 'StudentIN.GeneralDefinitions.SectionForm';
	global.StudentIN.GeneralDefinitions.SectionForm = $StudentIN_GeneralDefinitions_SectionForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.GeneralDefinitions.SectionGrid
	var $StudentIN_GeneralDefinitions_SectionGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_GeneralDefinitions_SectionGrid.__typeName = 'StudentIN.GeneralDefinitions.SectionGrid';
	global.StudentIN.GeneralDefinitions.SectionGrid = $StudentIN_GeneralDefinitions_SectionGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Membership.ChangePasswordForm
	var $StudentIN_Membership_ChangePasswordForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Membership_ChangePasswordForm.__typeName = 'StudentIN.Membership.ChangePasswordForm';
	global.StudentIN.Membership.ChangePasswordForm = $StudentIN_Membership_ChangePasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Membership.ChangePasswordPanel
	var $StudentIN_Membership_ChangePasswordPanel = function(container) {
		this.$form = null;
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.$form = new $StudentIN_Membership_ChangePasswordForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_newPassword(), this.get_uniqueName(), ss.mkdel(this, function(e) {
			if (this.$form.get_confirmPassword().get_value().length < 7) {
				return ss.formatString(Q.text('Validation.MinRequiredPasswordLength'), 7);
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_confirmPassword(), this.get_uniqueName(), ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_confirmPassword().get_value(), this.$form.get_newPassword().get_value())) {
				return Q.text('Validation.PasswordConfirm');
			}
			return null;
		}));
		this.byId$1('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e2) {
			e2.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/ChangePassword'),
				request: request,
				onSuccess: function(response) {
					Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function() {
						window.location.href = Q.resolveUrl('~/');
					}, {});
				}
			});
		})));
	};
	$StudentIN_Membership_ChangePasswordPanel.__typeName = 'StudentIN.Membership.ChangePasswordPanel';
	global.StudentIN.Membership.ChangePasswordPanel = $StudentIN_Membership_ChangePasswordPanel;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Membership.ForgotPasswordForm
	var $StudentIN_Membership_ForgotPasswordForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Membership_ForgotPasswordForm.__typeName = 'StudentIN.Membership.ForgotPasswordForm';
	global.StudentIN.Membership.ForgotPasswordForm = $StudentIN_Membership_ForgotPasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Membership.ForgotPasswordPanel
	var $StudentIN_Membership_ForgotPasswordPanel = function(container) {
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.byId$1('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e) {
			e.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/ForgotPassword'),
				request: request,
				onSuccess: function(response) {
					Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function() {
						window.location.href = Q.resolveUrl('~/');
					}, {});
				}
			});
		})));
	};
	$StudentIN_Membership_ForgotPasswordPanel.__typeName = 'StudentIN.Membership.ForgotPasswordPanel';
	global.StudentIN.Membership.ForgotPasswordPanel = $StudentIN_Membership_ForgotPasswordPanel;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Membership.LoginForm
	var $StudentIN_Membership_LoginForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Membership_LoginForm.__typeName = 'StudentIN.Membership.LoginForm';
	global.StudentIN.Membership.LoginForm = $StudentIN_Membership_LoginForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Membership.LoginPanel
	var $StudentIN_Membership_LoginPanel = function(container) {
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.byId$1('LoginButton').click(ss.thisFix(ss.mkdel(this, function(s, e) {
			e.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/Login'),
				request: request,
				onSuccess: function(response) {
					var q = Q.parseQueryString();
					var $t1 = q['returnUrl'];
					if (ss.isNullOrUndefined($t1)) {
						$t1 = q['ReturnUrl'];
					}
					var r = $t1;
					if (!ss.isNullOrEmptyString(r)) {
						window.location.href = r;
					}
					else {
						window.location.href = Q.resolveUrl('~/');
					}
				}
			});
		})));
	};
	$StudentIN_Membership_LoginPanel.__typeName = 'StudentIN.Membership.LoginPanel';
	global.StudentIN.Membership.LoginPanel = $StudentIN_Membership_LoginPanel;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Membership.ResetPasswordForm
	var $StudentIN_Membership_ResetPasswordForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Membership_ResetPasswordForm.__typeName = 'StudentIN.Membership.ResetPasswordForm';
	global.StudentIN.Membership.ResetPasswordForm = $StudentIN_Membership_ResetPasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Membership.ResetPasswordPanel
	var $StudentIN_Membership_ResetPasswordPanel = function(container) {
		this.$form = null;
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.$form = new $StudentIN_Membership_ResetPasswordForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_newPassword(), this.get_uniqueName(), ss.mkdel(this, function(e) {
			if (this.$form.get_confirmPassword().get_value().length < 7) {
				return ss.formatString(Q.text('Validation.MinRequiredPasswordLength'), 7);
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_confirmPassword(), this.get_uniqueName(), ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_confirmPassword().get_value(), this.$form.get_newPassword().get_value())) {
				return Q.text('Validation.PasswordConfirm');
			}
			return null;
		}));
		this.byId$1('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e2) {
			e2.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			request.Token = this.byId$1('Token').val();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/ResetPassword'),
				request: request,
				onSuccess: function(response) {
					Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function() {
						window.location.href = Q.resolveUrl('~/Account/Login');
					}, {});
				}
			});
		})));
	};
	$StudentIN_Membership_ResetPasswordPanel.__typeName = 'StudentIN.Membership.ResetPasswordPanel';
	global.StudentIN.Membership.ResetPasswordPanel = $StudentIN_Membership_ResetPasswordPanel;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Membership.SignUpForm
	var $StudentIN_Membership_SignUpForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Membership_SignUpForm.__typeName = 'StudentIN.Membership.SignUpForm';
	global.StudentIN.Membership.SignUpForm = $StudentIN_Membership_SignUpForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Membership.SignUpPanel
	var $StudentIN_Membership_SignUpPanel = function(container) {
		this.$form = null;
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.$form = new $StudentIN_Membership_SignUpForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_confirmPassword(), this.uniqueName, ss.mkdel(this, function(e) {
			if (!ss.referenceEquals(this.$form.get_confirmPassword().get_value(), this.$form.get_password().get_value())) {
				return Q.text('Validation.PasswordConfirm');
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_confirmEmail(), this.uniqueName, ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_confirmEmail().get_value(), this.$form.get_email().get_value())) {
				return Q.text('Validation.EmailConfirm');
			}
			return null;
		}));
		this.byId$1('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e2) {
			e2.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/SignUp'),
				request: { DisplayName: this.$form.get_displayName().get_value(), Email: this.$form.get_email().get_value(), Password: this.$form.get_password().get_value() },
				onSuccess: function(response) {
					Q.information(Q.text('Forms.Membership.SignUp.Success'), function() {
						window.location.href = Q.resolveUrl('~/');
					}, {});
				}
			});
		})));
	};
	$StudentIN_Membership_SignUpPanel.__typeName = 'StudentIN.Membership.SignUpPanel';
	global.StudentIN.Membership.SignUpPanel = $StudentIN_Membership_SignUpPanel;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CategoryDialog
	var $StudentIN_Northwind_CategoryDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_Northwind_CategoryDialog.__typeName = 'StudentIN.Northwind.CategoryDialog';
	global.StudentIN.Northwind.CategoryDialog = $StudentIN_Northwind_CategoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CategoryForm
	var $StudentIN_Northwind_CategoryForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_CategoryForm.__typeName = 'StudentIN.Northwind.CategoryForm';
	global.StudentIN.Northwind.CategoryForm = $StudentIN_Northwind_CategoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CategoryGrid
	var $StudentIN_Northwind_CategoryGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Northwind_CategoryGrid.__typeName = 'StudentIN.Northwind.CategoryGrid';
	global.StudentIN.Northwind.CategoryGrid = $StudentIN_Northwind_CategoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CustomerCustomerDemoDialog
	var $StudentIN_Northwind_CustomerCustomerDemoDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_Northwind_CustomerCustomerDemoDialog.__typeName = 'StudentIN.Northwind.CustomerCustomerDemoDialog';
	global.StudentIN.Northwind.CustomerCustomerDemoDialog = $StudentIN_Northwind_CustomerCustomerDemoDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CustomerCustomerDemoForm
	var $StudentIN_Northwind_CustomerCustomerDemoForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_CustomerCustomerDemoForm.__typeName = 'StudentIN.Northwind.CustomerCustomerDemoForm';
	global.StudentIN.Northwind.CustomerCustomerDemoForm = $StudentIN_Northwind_CustomerCustomerDemoForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CustomerCustomerDemoGrid
	var $StudentIN_Northwind_CustomerCustomerDemoGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Northwind_CustomerCustomerDemoGrid.__typeName = 'StudentIN.Northwind.CustomerCustomerDemoGrid';
	global.StudentIN.Northwind.CustomerCustomerDemoGrid = $StudentIN_Northwind_CustomerCustomerDemoGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CustomerDemographicDialog
	var $StudentIN_Northwind_CustomerDemographicDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_Northwind_CustomerDemographicDialog.__typeName = 'StudentIN.Northwind.CustomerDemographicDialog';
	global.StudentIN.Northwind.CustomerDemographicDialog = $StudentIN_Northwind_CustomerDemographicDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CustomerDemographicForm
	var $StudentIN_Northwind_CustomerDemographicForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_CustomerDemographicForm.__typeName = 'StudentIN.Northwind.CustomerDemographicForm';
	global.StudentIN.Northwind.CustomerDemographicForm = $StudentIN_Northwind_CustomerDemographicForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CustomerDemographicGrid
	var $StudentIN_Northwind_CustomerDemographicGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Northwind_CustomerDemographicGrid.__typeName = 'StudentIN.Northwind.CustomerDemographicGrid';
	global.StudentIN.Northwind.CustomerDemographicGrid = $StudentIN_Northwind_CustomerDemographicGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CustomerDialog
	var $StudentIN_Northwind_CustomerDialog = function() {
		this.$loadedState = null;
		this.$ordersGrid = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$ordersGrid = new $StudentIN_Northwind_CustomerOrdersGrid(this.byId$1('OrdersGrid'));
		Serenity.FLX.flexHeightOnly(this.$ordersGrid.get_element(), 1);
		this.byId$1('NoteList').closest('.field').hide().end().appendTo(this.byId$1('TabNotes'));
		$StudentIN_DialogUtils.pendingChangesConfirmation(this.element, ss.mkdel(this, function() {
			return !ss.referenceEquals(this.$getSaveState(), this.$loadedState);
		}));
		this.tabs.bind('tabsactivate', ss.mkdel(this, function(e, i) {
			this.arrange();
		}));
	};
	$StudentIN_Northwind_CustomerDialog.__typeName = 'StudentIN.Northwind.CustomerDialog';
	global.StudentIN.Northwind.CustomerDialog = $StudentIN_Northwind_CustomerDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CustomerEditor
	var $StudentIN_Northwind_CustomerEditor = function(container, options) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).$ctor1.call(this, container, options);
	};
	$StudentIN_Northwind_CustomerEditor.__typeName = 'StudentIN.Northwind.CustomerEditor';
	global.StudentIN.Northwind.CustomerEditor = $StudentIN_Northwind_CustomerEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CustomerForm
	var $StudentIN_Northwind_CustomerForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_CustomerForm.__typeName = 'StudentIN.Northwind.CustomerForm';
	global.StudentIN.Northwind.CustomerForm = $StudentIN_Northwind_CustomerForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CustomerGrid
	var $StudentIN_Northwind_CustomerGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Northwind_CustomerGrid.__typeName = 'StudentIN.Northwind.CustomerGrid';
	global.StudentIN.Northwind.CustomerGrid = $StudentIN_Northwind_CustomerGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CustomerOrderDialog
	var $StudentIN_Northwind_CustomerOrderDialog = function() {
		$StudentIN_Northwind_OrderDialog.call(this);
	};
	$StudentIN_Northwind_CustomerOrderDialog.__typeName = 'StudentIN.Northwind.CustomerOrderDialog';
	global.StudentIN.Northwind.CustomerOrderDialog = $StudentIN_Northwind_CustomerOrderDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.CustomerOrdersGrid
	var $StudentIN_Northwind_CustomerOrdersGrid = function(container) {
		this.$customerID = null;
		$StudentIN_Northwind_OrderGrid.call(this, container);
	};
	$StudentIN_Northwind_CustomerOrdersGrid.__typeName = 'StudentIN.Northwind.CustomerOrdersGrid';
	global.StudentIN.Northwind.CustomerOrdersGrid = $StudentIN_Northwind_CustomerOrdersGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.EmployeeDialog
	var $StudentIN_Northwind_EmployeeDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_Northwind_EmployeeDialog.__typeName = 'StudentIN.Northwind.EmployeeDialog';
	global.StudentIN.Northwind.EmployeeDialog = $StudentIN_Northwind_EmployeeDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.EmployeeForm
	var $StudentIN_Northwind_EmployeeForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_EmployeeForm.__typeName = 'StudentIN.Northwind.EmployeeForm';
	global.StudentIN.Northwind.EmployeeForm = $StudentIN_Northwind_EmployeeForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.EmployeeFormatter
	var $StudentIN_Northwind_EmployeeFormatter = function() {
		this.$1$GenderPropertyField = null;
	};
	$StudentIN_Northwind_EmployeeFormatter.__typeName = 'StudentIN.Northwind.EmployeeFormatter';
	global.StudentIN.Northwind.EmployeeFormatter = $StudentIN_Northwind_EmployeeFormatter;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.EmployeeGrid
	var $StudentIN_Northwind_EmployeeGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Northwind_EmployeeGrid.__typeName = 'StudentIN.Northwind.EmployeeGrid';
	global.StudentIN.Northwind.EmployeeGrid = $StudentIN_Northwind_EmployeeGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.EmployeeTerritoryDialog
	var $StudentIN_Northwind_EmployeeTerritoryDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_Northwind_EmployeeTerritoryDialog.__typeName = 'StudentIN.Northwind.EmployeeTerritoryDialog';
	global.StudentIN.Northwind.EmployeeTerritoryDialog = $StudentIN_Northwind_EmployeeTerritoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.EmployeeTerritoryForm
	var $StudentIN_Northwind_EmployeeTerritoryForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_EmployeeTerritoryForm.__typeName = 'StudentIN.Northwind.EmployeeTerritoryForm';
	global.StudentIN.Northwind.EmployeeTerritoryForm = $StudentIN_Northwind_EmployeeTerritoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.EmployeeTerritoryGrid
	var $StudentIN_Northwind_EmployeeTerritoryGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Northwind_EmployeeTerritoryGrid.__typeName = 'StudentIN.Northwind.EmployeeTerritoryGrid';
	global.StudentIN.Northwind.EmployeeTerritoryGrid = $StudentIN_Northwind_EmployeeTerritoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.FreightFormatter
	var $StudentIN_Northwind_FreightFormatter = function() {
	};
	$StudentIN_Northwind_FreightFormatter.__typeName = 'StudentIN.Northwind.FreightFormatter';
	global.StudentIN.Northwind.FreightFormatter = $StudentIN_Northwind_FreightFormatter;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.Gender
	var $StudentIN_Northwind_Gender = function() {
	};
	$StudentIN_Northwind_Gender.__typeName = 'StudentIN.Northwind.Gender';
	global.StudentIN.Northwind.Gender = $StudentIN_Northwind_Gender;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.NoteDialog
	var $StudentIN_Northwind_NoteDialog = function() {
		this.okClick = null;
		Serenity.TemplatedDialog.call(this);
		var $t2 = this.byId$1('Text');
		var $t1 = Serenity.HtmlContentEditorOptions.$ctor();
		$t1.rows = 12;
		new $Serenity_HtmlBasicContentEditor($t2, $t1);
	};
	$StudentIN_Northwind_NoteDialog.__typeName = 'StudentIN.Northwind.NoteDialog';
	global.StudentIN.Northwind.NoteDialog = $StudentIN_Northwind_NoteDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.NotesEditor
	var $StudentIN_Northwind_NotesEditor = function(container) {
		this.$items = null;
		this.$6$IsDirtyField = false;
		this.$6$OnChangeField = null;
		Serenity.TemplatedWidget.call(this, container);
		var $t2 = this.byId$1('Toolbar');
		var $t1 = [];
		$t1.push({ title: 'Add Note', cssClass: 'add-button', onClick: ss.mkdel(this, function(e) {
			e.preventDefault();
			this.$addClick();
		}) });
		new Serenity.Toolbar($t2, { buttons: $t1 });
	};
	$StudentIN_Northwind_NotesEditor.__typeName = 'StudentIN.Northwind.NotesEditor';
	global.StudentIN.Northwind.NotesEditor = $StudentIN_Northwind_NotesEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.OrderDetailDialog
	var $StudentIN_Northwind_OrderDetailDialog = function() {
		this.$form = null;
		ss.makeGenericType($StudentIN_Common_GridEditorDialog$1, [Object]).call(this);
		this.$form = new $StudentIN_Northwind_OrderDetailForm(this.get_idPrefix());
		Serenity.WX.changeSelect2(this.$form.get_productID(), ss.mkdel(this, function(e) {
			var productID = Serenity.IdExtensions.toInt32(this.$form.get_productID().get_value());
			if (ss.isValue(productID)) {
				this.$form.get_unitPrice().set_value(Q.getLookup('Northwind.Product').get_itemById()[ss.unbox(productID)].UnitPrice);
			}
		}));
		Serenity.VX.addValidationRule(this.$form.get_discount(), this.uniqueName, ss.mkdel(this, function(e1) {
			if (ss.isValue(this.$form.get_unitPrice().get_value()) && ss.isValue(this.$form.get_quantity().get_value$1()) && ss.isValue(this.$form.get_discount().get_value()) && ss.unbox(this.$form.get_discount().get_value()) > 0 && ss.unbox(this.$form.get_discount().get_value()) > ss.unbox(this.$form.get_unitPrice().get_value()) * ss.unbox(this.$form.get_quantity().get_value$1())) {
				return "Discount can't be higher than total price!";
			}
			return null;
		}));
	};
	$StudentIN_Northwind_OrderDetailDialog.__typeName = 'StudentIN.Northwind.OrderDetailDialog';
	global.StudentIN.Northwind.OrderDetailDialog = $StudentIN_Northwind_OrderDetailDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.OrderDetailForm
	var $StudentIN_Northwind_OrderDetailForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_OrderDetailForm.__typeName = 'StudentIN.Northwind.OrderDetailForm';
	global.StudentIN.Northwind.OrderDetailForm = $StudentIN_Northwind_OrderDetailForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.OrderDetailsEditor
	var $StudentIN_Northwind_OrderDetailsEditor = function(container) {
		ss.makeGenericType($StudentIN_Common_GridEditorBase$1, [Object]).call(this, container);
	};
	$StudentIN_Northwind_OrderDetailsEditor.__typeName = 'StudentIN.Northwind.OrderDetailsEditor';
	global.StudentIN.Northwind.OrderDetailsEditor = $StudentIN_Northwind_OrderDetailsEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.OrderDialog
	var $StudentIN_Northwind_OrderDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_Northwind_OrderForm(this.get_idPrefix());
	};
	$StudentIN_Northwind_OrderDialog.__typeName = 'StudentIN.Northwind.OrderDialog';
	global.StudentIN.Northwind.OrderDialog = $StudentIN_Northwind_OrderDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.OrderForm
	var $StudentIN_Northwind_OrderForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_OrderForm.__typeName = 'StudentIN.Northwind.OrderForm';
	global.StudentIN.Northwind.OrderForm = $StudentIN_Northwind_OrderForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.OrderGrid
	var $StudentIN_Northwind_OrderGrid = function(container) {
		this.$shippingState = null;
		this.$7$CustomerFilterField = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Northwind_OrderGrid.__typeName = 'StudentIN.Northwind.OrderGrid';
	global.StudentIN.Northwind.OrderGrid = $StudentIN_Northwind_OrderGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.OrderShippingState
	var $StudentIN_Northwind_OrderShippingState = function() {
	};
	$StudentIN_Northwind_OrderShippingState.__typeName = 'StudentIN.Northwind.OrderShippingState';
	global.StudentIN.Northwind.OrderShippingState = $StudentIN_Northwind_OrderShippingState;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.PhoneEditor
	var $StudentIN_Northwind_PhoneEditor = function(input) {
		this.$5$MultipleField = false;
		Serenity.StringEditor.call(this, input);
		Serenity.VX.addValidationRule(this, this.uniqueName, ss.mkdel(this, function(e) {
			var value = Q.trimToNull(this.get_value());
			if (ss.isNullOrUndefined(value)) {
				return null;
			}
			return $StudentIN_Northwind_PhoneEditor.$validate(value, this.get_multiple());
		}));
		input.bind('change', ss.mkdel(this, function(e1) {
			if (!Serenity.WX.hasOriginalEvent(e1)) {
				return;
			}
			this.formatValue();
		}));
		input.bind('blur', ss.mkdel(this, function(e2) {
			if (this.element.hasClass('valid')) {
				this.formatValue();
			}
		}));
	};
	$StudentIN_Northwind_PhoneEditor.__typeName = 'StudentIN.Northwind.PhoneEditor';
	$StudentIN_Northwind_PhoneEditor.$validate = function(phone, isMultiple) {
		var valid = (isMultiple ? $StudentIN_Northwind_PhoneEditor.$isValidMulti(phone, $StudentIN_Northwind_PhoneEditor.$isValidPhone) : $StudentIN_Northwind_PhoneEditor.$isValidPhone(phone));
		if (valid) {
			return null;
		}
		return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
	};
	$StudentIN_Northwind_PhoneEditor.$isValidPhone = function(phone) {
		if (Q.isEmptyOrNull(phone)) {
			return false;
		}
		phone = ss.replaceAllString(ss.replaceAllString(phone, ' ', ''), '-', '');
		if (phone.length < 10) {
			return false;
		}
		if (ss.startsWithString(phone, '0')) {
			phone = phone.substring(1);
		}
		if (ss.startsWithString(phone, '(') && phone.charCodeAt(4) === 41) {
			phone = phone.substr(1, 3) + phone.substring(5);
		}
		if (phone.length !== 10) {
			return false;
		}
		if (ss.startsWithString(phone, '0')) {
			return false;
		}
		for (var i = 0; i < phone.length; i++) {
			var c = phone.charCodeAt(i);
			if (c < 48 || c > 57) {
				return false;
			}
		}
		return true;
	};
	$StudentIN_Northwind_PhoneEditor.$formatPhone = function(phone) {
		if (!$StudentIN_Northwind_PhoneEditor.$isValidPhone(phone)) {
			return phone;
		}
		phone = ss.replaceAllString(ss.replaceAllString(ss.replaceAllString(ss.replaceAllString(phone, ' ', ''), '-', ''), '(', ''), ')', '');
		if (ss.startsWithString(phone, '0')) {
			phone = phone.substring(1);
		}
		phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
		return phone;
	};
	$StudentIN_Northwind_PhoneEditor.$formatMulti = function(phone, format) {
		var phones = ss.replaceAllString(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
		var result = '';
		for (var $t1 = 0; $t1 < phones.length; $t1++) {
			var x = phones[$t1];
			var s = Q.trimToNull(x);
			if (ss.isNullOrUndefined(s)) {
				continue;
			}
			if (result.length > 0) {
				result += ', ';
			}
			result += format(s);
		}
		return result;
	};
	$StudentIN_Northwind_PhoneEditor.$isValidMulti = function(phone, check) {
		if (Q.isEmptyOrNull(phone)) {
			return false;
		}
		var phones = ss.replaceAllString(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
		var anyValid = false;
		for (var $t1 = 0; $t1 < phones.length; $t1++) {
			var x = phones[$t1];
			var s = Q.trimToNull(x);
			if (ss.isNullOrUndefined(s)) {
				continue;
			}
			if (!check(s)) {
				return false;
			}
			anyValid = true;
		}
		if (!anyValid) {
			return false;
		}
		return true;
	};
	global.StudentIN.Northwind.PhoneEditor = $StudentIN_Northwind_PhoneEditor;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.ProductDialog
	var $StudentIN_Northwind_ProductDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_Northwind_ProductDialog.__typeName = 'StudentIN.Northwind.ProductDialog';
	global.StudentIN.Northwind.ProductDialog = $StudentIN_Northwind_ProductDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.ProductForm
	var $StudentIN_Northwind_ProductForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_ProductForm.__typeName = 'StudentIN.Northwind.ProductForm';
	global.StudentIN.Northwind.ProductForm = $StudentIN_Northwind_ProductForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.ProductGrid
	var $StudentIN_Northwind_ProductGrid = function(container) {
		this.$pendingChanges = {};
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
		this.slickContainer.on('change', 'input.edit', ss.mkdel(this, this.$inputsChange));
	};
	$StudentIN_Northwind_ProductGrid.__typeName = 'StudentIN.Northwind.ProductGrid';
	global.StudentIN.Northwind.ProductGrid = $StudentIN_Northwind_ProductGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.RegionDialog
	var $StudentIN_Northwind_RegionDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_Northwind_RegionDialog.__typeName = 'StudentIN.Northwind.RegionDialog';
	global.StudentIN.Northwind.RegionDialog = $StudentIN_Northwind_RegionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.RegionForm
	var $StudentIN_Northwind_RegionForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_RegionForm.__typeName = 'StudentIN.Northwind.RegionForm';
	global.StudentIN.Northwind.RegionForm = $StudentIN_Northwind_RegionForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.RegionGrid
	var $StudentIN_Northwind_RegionGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Northwind_RegionGrid.__typeName = 'StudentIN.Northwind.RegionGrid';
	global.StudentIN.Northwind.RegionGrid = $StudentIN_Northwind_RegionGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.ShipperDialog
	var $StudentIN_Northwind_ShipperDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_Northwind_ShipperDialog.__typeName = 'StudentIN.Northwind.ShipperDialog';
	global.StudentIN.Northwind.ShipperDialog = $StudentIN_Northwind_ShipperDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.ShipperForm
	var $StudentIN_Northwind_ShipperForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_ShipperForm.__typeName = 'StudentIN.Northwind.ShipperForm';
	global.StudentIN.Northwind.ShipperForm = $StudentIN_Northwind_ShipperForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.ShipperFormatter
	var $StudentIN_Northwind_ShipperFormatter = function() {
	};
	$StudentIN_Northwind_ShipperFormatter.__typeName = 'StudentIN.Northwind.ShipperFormatter';
	global.StudentIN.Northwind.ShipperFormatter = $StudentIN_Northwind_ShipperFormatter;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.ShipperGrid
	var $StudentIN_Northwind_ShipperGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Northwind_ShipperGrid.__typeName = 'StudentIN.Northwind.ShipperGrid';
	global.StudentIN.Northwind.ShipperGrid = $StudentIN_Northwind_ShipperGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.SupplierDialog
	var $StudentIN_Northwind_SupplierDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_Northwind_SupplierDialog.__typeName = 'StudentIN.Northwind.SupplierDialog';
	global.StudentIN.Northwind.SupplierDialog = $StudentIN_Northwind_SupplierDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.SupplierForm
	var $StudentIN_Northwind_SupplierForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_SupplierForm.__typeName = 'StudentIN.Northwind.SupplierForm';
	global.StudentIN.Northwind.SupplierForm = $StudentIN_Northwind_SupplierForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.SupplierGrid
	var $StudentIN_Northwind_SupplierGrid = function(container) {
		this.$country = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Northwind_SupplierGrid.__typeName = 'StudentIN.Northwind.SupplierGrid';
	global.StudentIN.Northwind.SupplierGrid = $StudentIN_Northwind_SupplierGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.TerritoryDialog
	var $StudentIN_Northwind_TerritoryDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$StudentIN_Northwind_TerritoryDialog.__typeName = 'StudentIN.Northwind.TerritoryDialog';
	global.StudentIN.Northwind.TerritoryDialog = $StudentIN_Northwind_TerritoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.TerritoryForm
	var $StudentIN_Northwind_TerritoryForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_Northwind_TerritoryForm.__typeName = 'StudentIN.Northwind.TerritoryForm';
	global.StudentIN.Northwind.TerritoryForm = $StudentIN_Northwind_TerritoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.Northwind.TerritoryGrid
	var $StudentIN_Northwind_TerritoryGrid = function(container) {
		this.$region = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_Northwind_TerritoryGrid.__typeName = 'StudentIN.Northwind.TerritoryGrid';
	global.StudentIN.Northwind.TerritoryGrid = $StudentIN_Northwind_TerritoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.InvoiceInformationDialog
	var $StudentIN_StudentMain_InvoiceInformationDialog = function() {
		this.form = null;
		this.$studentId = 0;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_StudentMain_InvoiceInformationForm(this.get_idPrefix());
	};
	$StudentIN_StudentMain_InvoiceInformationDialog.__typeName = 'StudentIN.StudentMain.InvoiceInformationDialog';
	global.StudentIN.StudentMain.InvoiceInformationDialog = $StudentIN_StudentMain_InvoiceInformationDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.InvoiceInformationForm
	var $StudentIN_StudentMain_InvoiceInformationForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_StudentMain_InvoiceInformationForm.__typeName = 'StudentIN.StudentMain.InvoiceInformationForm';
	global.StudentIN.StudentMain.InvoiceInformationForm = $StudentIN_StudentMain_InvoiceInformationForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.InvoiceInformationGrid
	var $StudentIN_StudentMain_InvoiceInformationGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_StudentMain_InvoiceInformationGrid.__typeName = 'StudentIN.StudentMain.InvoiceInformationGrid';
	global.StudentIN.StudentMain.InvoiceInformationGrid = $StudentIN_StudentMain_InvoiceInformationGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.PaymentDialog
	var $StudentIN_StudentMain_PaymentDialog = function() {
		this.$studentId = 0;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		//form = new PaymentForm(this.IdPrefix);
	};
	$StudentIN_StudentMain_PaymentDialog.__typeName = 'StudentIN.StudentMain.PaymentDialog';
	global.StudentIN.StudentMain.PaymentDialog = $StudentIN_StudentMain_PaymentDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.PaymentForm
	var $StudentIN_StudentMain_PaymentForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_StudentMain_PaymentForm.__typeName = 'StudentIN.StudentMain.PaymentForm';
	global.StudentIN.StudentMain.PaymentForm = $StudentIN_StudentMain_PaymentForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.PaymentGrid
	var $StudentIN_StudentMain_PaymentGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_StudentMain_PaymentGrid.__typeName = 'StudentIN.StudentMain.PaymentGrid';
	global.StudentIN.StudentMain.PaymentGrid = $StudentIN_StudentMain_PaymentGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.PaymentInstallmentDialog
	var $StudentIN_StudentMain_PaymentInstallmentDialog = function() {
		this.form = null;
		this.$studentId = 0;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_StudentMain_PaymentInstallmentForm(this.get_idPrefix());
	};
	$StudentIN_StudentMain_PaymentInstallmentDialog.__typeName = 'StudentIN.StudentMain.PaymentInstallmentDialog';
	global.StudentIN.StudentMain.PaymentInstallmentDialog = $StudentIN_StudentMain_PaymentInstallmentDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.PaymentInstallmentForm
	var $StudentIN_StudentMain_PaymentInstallmentForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_StudentMain_PaymentInstallmentForm.__typeName = 'StudentIN.StudentMain.PaymentInstallmentForm';
	global.StudentIN.StudentMain.PaymentInstallmentForm = $StudentIN_StudentMain_PaymentInstallmentForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.PaymentInstallmentGrid
	var $StudentIN_StudentMain_PaymentInstallmentGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_StudentMain_PaymentInstallmentGrid.__typeName = 'StudentIN.StudentMain.PaymentInstallmentGrid';
	global.StudentIN.StudentMain.PaymentInstallmentGrid = $StudentIN_StudentMain_PaymentInstallmentGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.StudentDialog
	var $StudentIN_StudentMain_StudentDialog = function() {
		this.$gridPayment = null;
		this.$gridPaymentInstallment = null;
		this.$gridStudentDiscount = null;
		this.$gridInvoiceInformation = null;
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$gridPayment = new $StudentIN_StudentMain_SubPaymentGrid(this.byId$1('PaymentGrid'));
		this.$gridPaymentInstallment = new $StudentIN_StudentMain_SubPaymentInstallmentGrid(this.byId$1('PaymentInstallmentGrid'));
		this.$gridStudentDiscount = new $StudentIN_StudentMain_SubStudentDiscountGrid(this.byId$1('StudentDiscountGrid'));
		this.$gridInvoiceInformation = new $StudentIN_StudentMain_SubInvoiceInformationGrid(this.byId$1('InvoiceInformationGrid'));
		this.form = new $StudentIN_StudentMain_StudentForm(this.idPrefix);
		this.tabs.bind('tabsactivate', ss.mkdel(this, function(e, i) {
			this.arrange();
		}));
		this.$initializeFormFlexify();
	};
	$StudentIN_StudentMain_StudentDialog.__typeName = 'StudentIN.StudentMain.StudentDialog';
	global.StudentIN.StudentMain.StudentDialog = $StudentIN_StudentMain_StudentDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.StudentDiscountDialog
	var $StudentIN_StudentMain_StudentDiscountDialog = function() {
		this.form = null;
		this.$studentId = 0;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $StudentIN_StudentMain_StudentDiscountForm(this.get_idPrefix());
	};
	$StudentIN_StudentMain_StudentDiscountDialog.__typeName = 'StudentIN.StudentMain.StudentDiscountDialog';
	global.StudentIN.StudentMain.StudentDiscountDialog = $StudentIN_StudentMain_StudentDiscountDialog;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.StudentDiscountForm
	var $StudentIN_StudentMain_StudentDiscountForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_StudentMain_StudentDiscountForm.__typeName = 'StudentIN.StudentMain.StudentDiscountForm';
	global.StudentIN.StudentMain.StudentDiscountForm = $StudentIN_StudentMain_StudentDiscountForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.StudentDiscountGrid
	var $StudentIN_StudentMain_StudentDiscountGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_StudentMain_StudentDiscountGrid.__typeName = 'StudentIN.StudentMain.StudentDiscountGrid';
	global.StudentIN.StudentMain.StudentDiscountGrid = $StudentIN_StudentMain_StudentDiscountGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.StudentForm
	var $StudentIN_StudentMain_StudentForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$StudentIN_StudentMain_StudentForm.__typeName = 'StudentIN.StudentMain.StudentForm';
	global.StudentIN.StudentMain.StudentForm = $StudentIN_StudentMain_StudentForm;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.StudentGrid
	var $StudentIN_StudentMain_StudentGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$StudentIN_StudentMain_StudentGrid.__typeName = 'StudentIN.StudentMain.StudentGrid';
	global.StudentIN.StudentMain.StudentGrid = $StudentIN_StudentMain_StudentGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.SubInvoiceInformationGrid
	var $StudentIN_StudentMain_SubInvoiceInformationGrid = function(container) {
		this.$studentId = null;
		$StudentIN_StudentMain_InvoiceInformationGrid.call(this, container);
	};
	$StudentIN_StudentMain_SubInvoiceInformationGrid.__typeName = 'StudentIN.StudentMain.SubInvoiceInformationGrid';
	global.StudentIN.StudentMain.SubInvoiceInformationGrid = $StudentIN_StudentMain_SubInvoiceInformationGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.SubPaymentGrid
	var $StudentIN_StudentMain_SubPaymentGrid = function(container) {
		this.$studentId = null;
		$StudentIN_StudentMain_PaymentGrid.call(this, container);
	};
	$StudentIN_StudentMain_SubPaymentGrid.__typeName = 'StudentIN.StudentMain.SubPaymentGrid';
	global.StudentIN.StudentMain.SubPaymentGrid = $StudentIN_StudentMain_SubPaymentGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.SubPaymentInstallmentGrid
	var $StudentIN_StudentMain_SubPaymentInstallmentGrid = function(container) {
		this.$studentId = null;
		$StudentIN_StudentMain_PaymentInstallmentGrid.call(this, container);
	};
	$StudentIN_StudentMain_SubPaymentInstallmentGrid.__typeName = 'StudentIN.StudentMain.SubPaymentInstallmentGrid';
	global.StudentIN.StudentMain.SubPaymentInstallmentGrid = $StudentIN_StudentMain_SubPaymentInstallmentGrid;
	////////////////////////////////////////////////////////////////////////////////
	// StudentIN.StudentMain.SubStudentDiscountGrid
	var $StudentIN_StudentMain_SubStudentDiscountGrid = function(container) {
		this.$studentId = null;
		$StudentIN_StudentMain_StudentDiscountGrid.call(this, container);
	};
	$StudentIN_StudentMain_SubStudentDiscountGrid.__typeName = 'StudentIN.StudentMain.SubStudentDiscountGrid';
	global.StudentIN.StudentMain.SubStudentDiscountGrid = $StudentIN_StudentMain_SubStudentDiscountGrid;
	ss.initClass($Serenity_HtmlBasicContentEditor, $asm, {
		getConfig: function() {
			var config = Serenity.HtmlContentEditor.prototype.getConfig.call(this);
			config.removeButtons += ',Cut,Copy,Paste,BulletedList,NumberedList,Indent,Outdent,SpecialChar,Subscript,Superscript,Styles,PasteText,PasteFromWord,Strike,Link,Unlink,CreatePlaceholder,Image,Table,HorizontalRule,Source,Maximize,Format,Font,FontSize,Anchor,Blockquote,CreatePlaceholder,BGColor,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,Superscript,RemoveFormat';
			config.removePlugins += ',elementspath';
			return config;
		}
	}, Serenity.HtmlContentEditor, [Serenity.IStringValue]);
	ss.initClass($StudentIN_Authorization, $asm, {});
	ss.initClass($StudentIN_BasicProgressDialog, $asm, {
		get_cancelled: function() {
			return this.$6$CancelledField;
		},
		set_cancelled: function(value) {
			this.$6$CancelledField = value;
		},
		get_max: function() {
			return this.byId$1('ProgressBar').progressbar().progressbar('option', 'max');
		},
		set_max: function(value) {
			this.byId$1('ProgressBar').progressbar().progressbar('option', 'max', value);
		},
		get_value: function() {
			return ss.unbox(ss.cast(this.byId$1('ProgressBar').progressbar('value'), ss.Int32));
		},
		set_value: function(value) {
			this.byId$1('ProgressBar').progressbar().progressbar('value', value);
		},
		get_title: function() {
			return this.get_element().dialog().dialog('option', 'title');
		},
		set_title: function(value) {
			this.get_element().dialog().dialog('option', 'title', value);
		},
		get_cancelTitle: function() {
			return this.$6$CancelTitleField;
		},
		set_cancelTitle: function(value) {
			this.$6$CancelTitleField = value;
		},
		getDialogOptions: function() {
			var self = this;
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
			opt.width = 600;
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, function() {
				self.set_cancelled(true);
				self.get_element().closest('.ui-dialog').find('.ui-dialog-buttonpane .ui-button').attr('disabled', 'disabled').css('opacity', '0.5');
				var $t3 = self.get_element().dialog();
				var $t2 = Q.trimToNull(this.get_cancelTitle());
				if (ss.isNullOrUndefined($t2)) {
					$t2 = Q.text('Site.BasicProgressDialog.CancelTitle');
				}
				$t3.dialog('option', 'title', $t2);
			}) });
			opt.buttons = $t1;
			return opt;
		},
		initDialog: function() {
			ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.initDialog.call(this);
			this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
		},
		getTemplate: function() {
			return "<div class='s-DialogContent s-BasicProgressDialogContent'><div id='~_StatusText' class='status-text'></div><div id='~_ProgressBar' class='progress-bar'><div id='~_ProgressLabel' class='progress-label'></div></div></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($StudentIN_BulkServiceAction, $asm, {
		createProgressDialog: function() {
			this.progressDialog = new $StudentIN_BasicProgressDialog();
			this.progressDialog.dialogOpen();
			this.progressDialog.set_max(Enumerable.from(this.keys).count());
			this.progressDialog.set_value(0);
		},
		getConfirmationFormat: function() {
			return Q.text('Site.BulkServiceAction.ConfirmationFormat');
		},
		getConfirmationMessage: function(targetCount) {
			return ss.formatString(this.getConfirmationFormat(), targetCount);
		},
		confirm: function(targetCount, action) {
			Q.confirm(this.getConfirmationMessage(targetCount), action);
		},
		getNothingToProcessMessage: function() {
			return Q.text('Site.BulkServiceAction.NothingToProcess');
		},
		nothingToProcess: function() {
			this.delayed(ss.mkdel(this, function() {
				Q.notifyError(this.getNothingToProcessMessage(), '', null);
			}));
		},
		getParallelRequests: function() {
			return 1;
		},
		getBatchSize: function() {
			return 1;
		},
		startParallelExecution: function() {
			this.createProgressDialog();
			this.pendingRequests = 0;
			this.completedRequests = 0;
			this.$errorCount = 0;
			this.errorByKey = new (ss.makeGenericType(ss.Dictionary$2, [String, Object]))();
			this.queue = ss.getEnumerator(this.keys);
			var parallelRequests = this.getParallelRequests();
			while (parallelRequests-- > 0) {
				this.executeNextBatch();
			}
		},
		serviceCallCleanup: function() {
			this.pendingRequests--;
			this.completedRequests++;
			var title = Q.text((this.progressDialog.get_cancelled() ? 'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
			title += ' (';
			if (this.$successCount > 0) {
				title += ss.formatString(Q.text('Site.BulkServiceAction.SuccessCount'), this.$successCount);
			}
			if (this.$errorCount > 0) {
				if (this.$successCount > 0) {
					title += ', ';
				}
				title += ss.formatString(Q.text('Site.BulkServiceAction.ErrorCount'), this.$errorCount);
			}
			this.progressDialog.set_title(title + ')');
			this.progressDialog.set_value(this.$successCount + this.$errorCount);
			if (!this.progressDialog.get_cancelled() && this.progressDialog.get_value() < this.keys.length) {
				this.executeNextBatch();
			}
			else if (this.pendingRequests === 0) {
				this.progressDialog.dialogClose();
				this.showResults();
				if (!ss.staticEquals(this.get_done(), null)) {
					this.get_done()();
					this.set_done(null);
				}
			}
		},
		executeForBatch: function(batch) {
		},
		executeNextBatch: function() {
			var batchSize = this.getBatchSize();
			var batch = [];
			while (true) {
				if (batch.length >= batchSize) {
					break;
				}
				if (!this.queue.moveNext()) {
					break;
				}
				batch.push(this.queue.current());
			}
			if (batch.length > 0) {
				this.pendingRequests++;
				this.executeForBatch(batch);
			}
		},
		delayed: function(action) {
			window.setTimeout(action, 500);
		},
		getAllHadErrorsFormat: function() {
			return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
		},
		showAllHadErrors: function() {
			this.delayed(ss.mkdel(this, function() {
				Q.notifyError(ss.formatString(this.getAllHadErrorsFormat(), this.$errorCount), '', null);
			}));
		},
		getSomeHadErrorsFormat: function() {
			return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
		},
		showSomeHadErrors: function() {
			this.delayed(ss.mkdel(this, function() {
				Q.notifyWarning(ss.formatString(this.getSomeHadErrorsFormat(), this.$successCount, this.$errorCount), '', null);
			}));
		},
		getAllSuccessFormat: function() {
			return Q.text('Site.BulkServiceAction.AllSuccessFormat');
		},
		showAllSuccess: function() {
			this.delayed(ss.mkdel(this, function() {
				Q.notifySuccess(ss.formatString(this.getAllSuccessFormat(), this.$successCount), '', null);
			}));
		},
		showResults: function() {
			if (this.$errorCount === 0 && this.$successCount === 0) {
				this.nothingToProcess();
				return;
			}
			if (this.$errorCount > 0 && this.$successCount === 0) {
				this.showAllHadErrors();
				return;
			}
			if (this.$errorCount > 0) {
				this.showSomeHadErrors();
				return;
			}
			this.showAllSuccess();
		},
		execute: function(keys) {
			this.keys = keys;
			if (this.keys.length === 0) {
				this.nothingToProcess();
				return;
			}
			this.confirm(this.keys.length, ss.mkdel(this, function() {
				this.startParallelExecution();
			}));
		},
		get_successCount: function() {
			return this.$successCount;
		},
		set_successCount: function(value) {
			this.$successCount = value;
		},
		get_errorCount: function() {
			return this.$errorCount;
		},
		set_errorCount: function(value) {
			this.$errorCount = value;
		},
		get_done: function() {
			return this.$2$DoneField;
		},
		set_done: function(value) {
			this.$2$DoneField = value;
		}
	}, Serenity.ScriptContext);
	ss.initClass($StudentIN_DialogUtils, $asm, {});
	ss.initClass($StudentIN_LanguageList, $asm, {});
	ss.initClass($StudentIN_SchoolForm, $asm, {
		get_departmentId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'DepartmentId');
		},
		get_code: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Code');
		},
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		},
		get_schoolGroupId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'SchoolGroupId');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_ScriptInitialization, $asm, {});
	ss.initClass($StudentIN_Administration_LanguageDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Administration_LanguageForm, $asm, {
		get_languageId: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LanguageId');
		},
		get_languageName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LanguageName');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Administration_LanguageGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Administration_PermissionCheckEditor, $asm, {
		$getItemGrantRevokeClass: function(item, grant) {
			if (!item.IsGroup) {
				return ((item.GrantRevoke === grant) ? ' checked' : '');
			}
			var desc = this.$getDescendants(item, true);
			var granted = Enumerable.from(desc).where(function(x) {
				return x.GrantRevoke === grant;
			});
			if (!granted.any()) {
				return '';
			}
			else if (Enumerable.from(desc).count() === granted.count()) {
				return 'checked';
			}
			else {
				return 'checked partial';
			}
		},
		$getItemEffectiveClass: function(item) {
			if (item.IsGroup) {
				var desc = this.$getDescendants(item, true);
				var grantCount = Enumerable.from(desc).count(ss.mkdel(this, function(x) {
					return x.GrantRevoke === true || ss.isNullOrUndefined(x.GrantRevoke) && this.$rolePermissions[x.Key];
				}));
				if (grantCount === desc.length || desc.length === 0) {
					return 'allow';
				}
				else if (grantCount === 0) {
					return 'deny';
				}
				else {
					return 'partial';
				}
			}
			else {
				var granted = item.GrantRevoke === true || ss.isNullOrUndefined(item.GrantRevoke) && this.$rolePermissions[item.Key];
				return (granted ? ' allow' : ' deny');
			}
		},
		getColumns: function() {
			var $t1 = [];
			$t1.push({ name: Q.text('Site.UserPermissionDialog.Permission'), field: 'Title', format: Serenity.SlickFormatting.treeToggle(Object).call(null, ss.mkdel(this, function() {
				return this.get_view();
			}), function(x) {
				return x.Key;
			}, ss.mkdel(this, function(ctx) {
				var item = ctx.item;
				var klass = this.$getItemEffectiveClass(item);
				return "<span class='effective-permission " + klass + "'>" + Q.htmlEncode(ctx.value) + '</span>';
			})), width: 495, sortable: false });
			$t1.push({ name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant', format: ss.mkdel(this, function(ctx1) {
				var item1 = ctx1.item;
				var klass1 = this.$getItemGrantRevokeClass(item1, true);
				return "<span class='check-box grant no-float " + klass1 + "'></span>";
			}), width: 65, sortable: false, headerCssClass: 'align-center', cssClass: 'align-center' });
			var columns = $t1;
			if (this.options.showRevoke) {
				columns.push({ name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke', format: ss.mkdel(this, function(ctx2) {
					var item2 = ctx2.item;
					var klass2 = this.$getItemGrantRevokeClass(item2, false);
					return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
				}), width: 65, sortable: false, headerCssClass: 'align-center', cssClass: 'align-center' });
			}
			return columns;
		},
		$setItems: function(items) {
			Serenity.SlickTreeHelper.setIndents(items, function(x) {
				return x.Key;
			}, function(x1) {
				return x1.ParentKey;
			}, false);
			this.get_view().setItems(items, true);
		},
		onViewSubmit: function() {
			return false;
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			if (!Serenity.SlickTreeHelper.filterById(item, this.view, function(x) {
				return x.ParentKey;
			})) {
				return false;
			}
			if (!ss.isNullOrEmptyString(this.$containsText)) {
				return this.$matchContains(item) || item.IsGroup && Enumerable.from(this.$getDescendants(item, false)).any(ss.mkdel(this, this.$matchContains));
			}
			return true;
		},
		$matchContains: function(item) {
			return Select2.util.stripDiacritics(ss.coalesce(item.Title, '')).toLowerCase().indexOf(this.$containsText) >= 0;
		},
		$getDescendants: function(item, excludeGroups) {
			var result = [];
			var stack = new Array();
			stack.push(item);
			while (stack.length > 0) {
				var i = stack.pop();
				var $t1 = this.$byParentKey.get(i.Key).getEnumerator();
				try {
					while ($t1.moveNext()) {
						var child = $t1.current();
						if (!excludeGroups || !child.IsGroup) {
							result.push(child);
						}
						stack.push(child);
					}
				}
				finally {
					$t1.dispose();
				}
			}
			return result;
		},
		onClick: function(e, row, cell) {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onClick.call(this, e, row, cell);
			if (!e.isDefaultPrevented()) {
				Serenity.SlickTreeHelper.toggleClick(Object).call(null, e, row, cell, this.view, function(x) {
					return x.Key;
				});
			}
			if (e.isDefaultPrevented()) {
				return;
			}
			var target = $(e.target);
			var grant = target.hasClass('grant');
			if (ss.unbox(grant) || target.hasClass('revoke')) {
				e.preventDefault();
				var item = this.view.rows[row];
				var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
				if (checkedOrPartial) {
					grant = null;
				}
				else {
					grant = !!(ss.unbox(grant) ^ checkedOrPartial);
				}
				this.view.beginUpdate();
				try {
					if (item.IsGroup) {
						var $t1 = this.$getDescendants(item, true);
						for (var $t2 = 0; $t2 < $t1.length; $t2++) {
							var d = $t1[$t2];
							if (!ss.referenceEquals(d.GrantRevoke, grant)) {
								d.GrantRevoke = grant;
								this.view.updateItem(d.Key, d);
							}
						}
					}
					else if (!ss.referenceEquals(item.GrantRevoke, grant)) {
						item.GrantRevoke = grant;
						this.view.updateItem(item.Key, item);
					}
				}
				finally {
					this.view.endUpdate();
				}
			}
		},
		$getParentKey: function(key) {
			if (ss.endsWithString(key, ':')) {
				key = key.substr(0, key.length - 1);
			}
			var idx = key.lastIndexOf(String.fromCharCode(58));
			if (idx >= 0) {
				return key.substr(0, idx + 1);
			}
			return null;
		},
		getButtons: function() {
			return [];
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, text) {
				this.$containsText = Select2.util.stripDiacritics(ss.coalesce(Q.trimToNull(text), '')).toLowerCase();
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		$getSortedGroupAndPermissionKeys: function(titleByKey) {
			var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
			titleByKey.$ = {};
			var titleWithGroup = {};
			for (var $t1 = 0; $t1 < keys.length; $t1++) {
				var k = keys[$t1];
				var s = k;
				if (ss.isNullOrEmptyString(s)) {
					continue;
				}
				if (ss.endsWithString(s, ':')) {
					s = s.substr(0, s.length - 1);
					if (s.length === 0) {
						continue;
					}
				}
				if (ss.keyExists(titleByKey.$, s)) {
					continue;
				}
				titleByKey.$[s] = ss.coalesce(Q.tryGetText('Permission.' + s), s);
				var parts = s.split(String.fromCharCode(58));
				var group = '';
				var groupTitle = '';
				for (var i = 0; i < parts.length - 1; i++) {
					group = group + parts[i] + ':';
					var $t3 = titleByKey.$;
					var $t2 = Q.tryGetText('Permission.' + group);
					if (ss.isNullOrUndefined($t2)) {
						$t2 = parts[i];
					}
					$t3[group] = $t2;
					groupTitle = groupTitle + titleByKey.$[group] + ':';
					titleWithGroup[group] = groupTitle;
				}
				titleWithGroup[s] = groupTitle + titleByKey.$[s];
			}
			keys = Enumerable.from(Object.keys(titleByKey.$)).toArray();
			keys.sort(function(x, y) {
				return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]);
			});
			return keys;
		},
		get_value: function() {
			var result = [];
			var $t1 = this.view.getItems();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				if (ss.isValue(item.GrantRevoke) && !ss.endsWithString(item.Key, ':')) {
					result.push({ PermissionKey: item.Key, Grant: ss.unbox(item.GrantRevoke) });
				}
			}
			return result;
		},
		set_value: function(value) {
			var $t1 = this.view.getItems();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				item.GrantRevoke = null;
			}
			if (ss.isValue(value)) {
				for (var $t3 = 0; $t3 < value.length; $t3++) {
					var row = value[$t3];
					var r = this.view.getItemById(row.PermissionKey);
					if (ss.isValue(r)) {
						r.GrantRevoke = ss.coalesce(row.Grant, true);
					}
				}
			}
			this.$setItems(this.get_items());
		},
		get_rolePermissions: function() {
			return Enumerable.from(Object.keys(this.$rolePermissions)).toArray();
		},
		set_rolePermissions: function(value) {
			ss.clearKeys(this.$rolePermissions);
			if (ss.isValue(value)) {
				for (var $t1 = 0; $t1 < value.length; $t1++) {
					var k = value[$t1];
					this.$rolePermissions[k] = true;
				}
			}
			this.$setItems(this.get_items());
		}
	}, ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_Administration_PermissionModuleEditor, $asm, {}, ss.makeGenericType(Serenity.Select2Editor$2, [Object, String]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_Administration_RoleCheckEditor, $asm, {
		getButtons: function() {
			return [];
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, text) {
				this.$containsText = Q.trimToNull(text);
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.CheckTreeEditor$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			var contains = Select2.util.stripDiacritics(ss.coalesce(this.$containsText, '')).toUpperCase();
			if (Q.isEmptyOrNull(contains)) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.text, '')).toUpperCase().indexOf(contains) !== -1) {
				return true;
			}
			return false;
		},
		getItems: function() {
			var list = [];
			var roles = Q.getLookup('Administration.Role').get_items();
			for (var $t1 = 0; $t1 < roles.length; $t1++) {
				var role = roles[$t1];
				list.push({ id: role.RoleId.toString(), text: role.RoleName });
			}
			return list;
		}
	}, ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]), [Serenity.IDataGrid, Serenity.IGetEditValue, Serenity.ISetEditValue]);
	ss.initClass($StudentIN_Administration_RoleDialog, $asm, {
		getToolbarButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getToolbarButtons.call(this);
			buttons.push({ title: Q.text('Site.RolePermissionDialog.EditButton'), cssClass: 'lock-button', onClick: ss.mkdel(this, function() {
				(new $StudentIN_Administration_RolePermissionDialog({ roleID: ss.unbox(this.get_entity().RoleId), title: this.get_entity().RoleName })).dialogOpen();
			}) });
			return buttons;
		},
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			this.toolbar.findButton('lock-button').toggleClass('disabled', this.get_isNewOrDeleted());
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Administration_RoleForm, $asm, {
		get_roleName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'RoleName');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Administration_RoleGrid, $asm, {
		getDefaultSortBy: function() {
			var $t1 = [];
			$t1.push('RoleName');
			return $t1;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Administration_RolePermissionDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				Q.serviceRequest('Administration/RolePermission/Update', { RoleID: this.options.roleID, Permissions: Enumerable.from(this.$permissions.get_value()).select(function(x) {
					return x.PermissionKey;
				}).toArray(), Module: null, Submodule: null }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess'), '', null);
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Permissions'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($StudentIN_Administration_TranslationGrid, $asm, {
		onClick: function(e, row, cell) {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onClick.call(this, e, row, cell);
			if (e.isDefaultPrevented()) {
				return;
			}
			if ($(e.target).hasClass('source-text')) {
				e.preventDefault();
				var item = this.view.rows[row];
				var done = ss.mkdel(this, function() {
					item.CustomText = item.SourceText;
					this.view.updateItem(item.Key, item);
					this.$hasChanges = true;
				});
				if (Q.isTrimmedEmpty(item.CustomText) || ss.referenceEquals(Q.trimToEmpty(item.CustomText), Q.trimToEmpty(item.SourceText))) {
					done();
					return;
				}
				Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
			}
			if ($(e.target).hasClass('target-text')) {
				e.preventDefault();
				var item1 = this.view.rows[row];
				var done1 = ss.mkdel(this, function() {
					item1.CustomText = item1.TargetText;
					this.view.updateItem(item1.Key, item1);
					this.$hasChanges = true;
				});
				if (Q.isTrimmedEmpty(item1.CustomText) || ss.referenceEquals(Q.trimToEmpty(item1.CustomText), Q.trimToEmpty(item1.TargetText))) {
					done1();
					return;
				}
				Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done1);
			}
		},
		getColumnsAsync: function() {
			var columns = [];
			columns.push({ field: 'Key', width: 300, sortable: false });
			columns.push({
				field: 'SourceText',
				width: 300,
				sortable: false,
				format: function(ctx) {
					return Q.outerHtml($('<a/>').addClass('source-text').text(ss.coalesce(ss.cast(ctx.value, String), '')));
				}
			});
			columns.push({
				field: 'CustomText',
				width: 300,
				sortable: false,
				format: function(ctx1) {
					return Q.outerHtml($('<input/>').addClass('custom-text').attr('value', ss.cast(ctx1.value, String)).attr('type', 'text').attr('data-key', ss.cast(ctx1.item.Key, String)));
				}
			});
			columns.push({
				field: 'TargetText',
				width: 300,
				sortable: false,
				format: function(ctx2) {
					return Q.outerHtml($('<a/>').addClass('target-text').text(ss.coalesce(ss.cast(ctx2.value, String), '')));
				}
			});
			return RSVP.resolve(columns);
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Administration.Translation.SourceLanguage') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Administration.Language';
			this.$sourceLanguage = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.changeSelect2(this.$sourceLanguage, ss.mkdel(this, function(e1) {
				if (this.$hasChanges) {
					this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
				}
				else {
					this.refresh();
				}
			}));
			var $t4 = ss.mkdel(this, function(e2) {
				e2.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Administration.Translation.TargetLanguage') + ' ---');
			});
			var $t3 = Serenity.LookupEditorOptions.$ctor();
			$t3.lookupKey = 'Administration.Language';
			this.$targetLanguage = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t4, $t3, null);
			Serenity.WX.changeSelect2(this.$targetLanguage, ss.mkdel(this, function(e3) {
				if (this.$hasChanges) {
					this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
				}
				else {
					this.refresh();
				}
			}));
		},
		saveChanges: function(language) {
			var translations = {};
			var $t1 = this.view.getItems();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				translations[item.Key] = item.CustomText;
			}
			return RSVP.resolve(Q.serviceRequest('Administration/Translation/Update', { TargetLanguageID: language, Translations: translations }, null, null)).then(ss.mkdel(this, function() {
				this.$hasChanges = false;
				language = ss.coalesce(Q.trimToNull(language), 'invariant');
				Q.notifySuccess('User translations in "' + language + '" language are saved to "user.texts.' + language + '.json" ' + 'file under "~/App_Data/texts/"', '', null);
			}), null);
		},
		onViewSubmit: function() {
			var request = this.view.params;
			request.SourceLanguageID = this.$sourceLanguage.get_value();
			this.$targetLanguageKey = ss.coalesce(this.$targetLanguage.get_value(), '');
			request.TargetLanguageID = this.$targetLanguageKey;
			this.$hasChanges = false;
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this);
		},
		getButtons: function() {
			var $t1 = [];
			$t1.push({ title: Q.text('Db.Administration.Translation.SaveChangesButton'), onClick: ss.mkdel(this, function(e) {
				this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
			}), cssClass: 'apply-changes-button' });
			return $t1;
		},
		createQuickSearchInput: function() {
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, searchText) {
				this.$searchText = searchText;
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			if (Q.isEmptyOrNull(this.$searchText)) {
				return true;
			}
			var searching = Select2.util.stripDiacritics(this.$searchText).toLowerCase();
			if (Q.isEmptyOrNull(searching)) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.Key, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.SourceText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.TargetText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.CustomText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			return false;
		},
		usePager: function() {
			return false;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Administration_UserDialog, $asm, {
		getToolbarButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getToolbarButtons.call(this);
			buttons.push({ title: Q.text('Site.UserDialog.EditRolesButton'), cssClass: 'users-button', onClick: ss.mkdel(this, function() {
				(new $StudentIN_Administration_UserRoleDialog({ userID: ss.unbox(this.get_entity().UserId), username: this.get_entity().Username })).dialogOpen();
			}) });
			buttons.push({ title: Q.text('Site.UserDialog.EditPermissionsButton'), cssClass: 'lock-button', onClick: ss.mkdel(this, function() {
				(new $StudentIN_Administration_UserPermissionDialog({ userID: ss.unbox(this.get_entity().UserId), username: this.get_entity().Username })).dialogOpen();
			}) });
			return buttons;
		},
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			this.toolbar.findButton('users-button').toggleClass('disabled', this.get_isNewOrDeleted());
			this.toolbar.findButton('lock-button').toggleClass('disabled', this.get_isNewOrDeleted());
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_Administration_UserForm, $asm, {
		get_username: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Username');
		},
		get_displayName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'DisplayName');
		},
		get_email: function() {
			return this.byId(Serenity.EmailEditor).call(this, 'Email');
		},
		get_password: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'Password');
		},
		get_passwordConfirm: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'PasswordConfirm');
		},
		get_source: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Source');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Administration_UserGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'UserId', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'Username', width: 150, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'DisplayName', width: 150 });
			columns.push({ field: 'Email', width: 250 });
			columns.push({ field: 'Source', width: 100 });
			return columns;
		},
		getDefaultSortBy: function() {
			var $t1 = [];
			$t1.push('Username');
			return $t1;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_Administration_UserPermissionDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				Q.serviceRequest('Administration/UserPermission/Update', { UserID: this.options.userID, Permissions: this.$permissions.get_value(), Module: null, Submodule: null }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess'), '', null);
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Permissions'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($StudentIN_Administration_UserRoleDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				Q.serviceRequest('Administration/UserRole/Update', { UserID: this.options.userID, Roles: Enumerable.from(this.$permissions.get_value()).select(function(x) {
					return parseInt(x, 10);
				}).toArray() }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'), '', null);
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Roles'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($StudentIN_Northwind_OrderGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			this.set_customerFilter(this.addEqualityFilter($StudentIN_Northwind_CustomerEditor).call(this, 'CustomerID', null, null, null, null, null));
			this.addDateRangeFilter('OrderDate', null);
			var $t1 = Serenity.EnumEditorOptions.$ctor();
			$t1.enumKey = 'Northwind.OrderShippingState';
			this.$shippingState = this.addEqualityFilter(Serenity.EnumEditor).call(this, 'ShippingState', null, $t1, null, null, null);
			var $t2 = Serenity.LookupEditorOptions.$ctor();
			$t2.lookupKey = 'Northwind.Shipper';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'ShipVia', null, $t2, null, null, null);
			var $t3 = Serenity.LookupEditorOptions.$ctor();
			$t3.lookupKey = 'Northwind.OrderShipCountry';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'ShipCountry', null, $t3, null, null, null);
			var $t4 = Serenity.LookupEditorOptions.$ctor();
			$t4.lookupKey = 'Northwind.OrderShipCity';
			$t4.cascadeFrom = 'ShipCountry';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'ShipCity', null, $t4, null, null, null);
			var $t5 = Serenity.LookupEditorOptions.$ctor();
			$t5.lookupKey = 'Northwind.Employee';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'EmployeeID', null, $t5, null, null, null);
		},
		get_shippingState: function() {
			return Serenity.IdExtensions.toInt32(this.$shippingState.get_value());
		},
		set_shippingState: function(value) {
			this.$shippingState.set_value((ss.isNullOrUndefined(value) ? '' : ss.unbox(value).toString()));
		},
		getButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.getButtons.call(this);
			buttons.push($StudentIN_Common_ExcelExportHelper.createToolButton(this, 'Northwind/Order/ListExcel', ss.mkdel(this, this.onViewSubmit), 'Excel'));
			return buttons;
		},
		get_customerFilter: function() {
			return this.$7$CustomerFilterField;
		},
		set_customerFilter: function(value) {
			this.$7$CustomerFilterField = value;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_BasicSamples_CancellableBulkActionGrid, $asm, {
		createToolbarExtensions: function() {
			$StudentIN_Northwind_OrderGrid.prototype.createToolbarExtensions.call(this);
			this.$rowSelection = new Serenity.GridRowSelectionMixin(this);
		},
		getButtons: function() {
			var $t1 = [];
			$t1.push({ title: 'Perform Bulk Action on Selected Orders', cssClass: 'send-button', onClick: ss.mkdel(this, function() {
				if (!this.onViewSubmit()) {
					return;
				}
				var action = new $StudentIN_BasicSamples_OrderBulkAction();
				action.set_done(ss.delegateCombine(action.get_done(), ss.mkdel(this.$rowSelection, this.$rowSelection.resetCheckedAndRefresh)));
				action.execute(this.$rowSelection.getSelectedKeys());
			}) });
			return $t1;
		},
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			ss.insert(columns, 0, Serenity.GridRowSelectionMixin.createSelectColumn(ss.mkdel(this, function() {
				return this.$rowSelection;
			})));
			return columns;
		},
		getViewOptions: function() {
			var opt = ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.getViewOptions.call(this);
			opt.rowsPerPage = 2500;
			return opt;
		}
	}, $StudentIN_Northwind_OrderGrid, [Serenity.IDataGrid]);
	ss.initClass($StudentIN_BasicSamples_ChartInDialog, $asm, {
		onDialogOpen: function() {
			ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.onDialogOpen.call(this);
			Q.serviceRequest('BasicSamples/BasicSamples/OrdersByShipper', {}, ss.mkdel(this, function(response) {
				this.$areaChart = new Morris.Area({ element: this.get_idPrefix() + 'Chart', resize: true, parseTime: false, data: response.Values, xkey: 'Month', ykeys: response.ShipperKeys, labels: response.ShipperLabels, hideHover: 'auto' });
			}), null);
			this.element.closest('.ui-dialog').bind('resize', ss.mkdel(this, function() {
				this.arrange();
			}));
		},
		arrange: function() {
			ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.arrange.call(this);
			if (ss.isValue(this.$areaChart)) {
				this.$areaChart.redraw();
			}
		},
		getTemplate: function() {
			// you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
			return "<div id='~_Chart'></div>";
		},
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			opt.title = 'Orders by Shipper';
			return opt;
		}
	}, Serenity.TemplatedDialog, [Serenity.IDialog]);
	ss.initClass($StudentIN_Northwind_ProductDialog, $asm, {
		getLanguages: function() {
			return $StudentIN_LanguageList.get_value();
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_BasicSamples_CloneableEntityDialog, $asm, {
		updateInterface: function() {
			// by default cloneButton is hidden in base UpdateInterface method
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			// here we show it if it is edit mode (not new)
			this.cloneButton.toggle(this.get_isEditMode());
		},
		getCloningEntity: function() {
			var clone = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getCloningEntity.call(this);
			// add (Clone) suffix if it's not already added
			var suffix = ' (Clone)';
			if (!ss.endsWithString(ss.coalesce(clone.ProductName, ''), suffix)) {
				clone.ProductName = ss.coalesce(clone.ProductName, '') + suffix;
			}
			// it's better to clear image for this sample
			// otherwise we would have to create a temporary copy of it
			// and upload
			clone.ProductImage = null;
			// let's clear fields not logical to be cloned
			clone.UnitsInStock = 0;
			clone.UnitsOnOrder = 0;
			return clone;
		}
	}, $StudentIN_Northwind_ProductDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_Northwind_ProductGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.Supplier';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'SupplierID', null, $t1, null, null, null);
			var $t2 = Serenity.LookupEditorOptions.$ctor();
			$t2.lookupKey = 'Northwind.Category';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'CategoryID', null, $t2, null, null, null);
		},
		getButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.getButtons.call(this);
			buttons.push($StudentIN_Common_ExcelExportHelper.createToolButton(this, 'Northwind/Product/ListExcel', ss.mkdel(this, this.onViewSubmit), 'Excel'));
			buttons.push({ title: 'Save Changes', cssClass: 'apply-changes-button', onClick: ss.mkdel(this, function(e) {
				this.$saveClick();
			}) });
			return buttons;
		},
		onViewProcessData: function(response) {
			ss.clearKeys(this.$pendingChanges);
			this.$setSaveButtonState();
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewProcessData.call(this, response);
		},
		$inputFormatter: function(ctx) {
			var klass = 'edit';
			var item = ctx.item;
			var pending = this.$pendingChanges[ss.unbox(item.ProductID)];
			if (!!(ss.isValue(pending) && ss.isValue(pending[ctx.column.field]))) {
				klass += ' dirty';
			}
			var value = this.$getEffectiveValue(item, ctx.column.field);
			return "<input type='text' class='" + klass + "'" + " value='" + Q.formatNumber(value, '0.##') + "'" + '/>';
		},
		$getEffectiveValue: function(item, field) {
			var pending = this.$pendingChanges[ss.unbox(item.ProductID)];
			if (ss.isValue(pending)) {
				var $t1 = pending[field];
				if (ss.isNullOrUndefined($t1)) {
					$t1 = item[field];
				}
				return ss.cast($t1, Number);
			}
			return ss.cast(item[field], Number);
		},
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			Enumerable.from(columns).single(function(x) {
				return x.field === 'UnitPrice';
			}).format = ss.mkdel(this, this.$inputFormatter);
			Enumerable.from(columns).single(function(x1) {
				return x1.field === 'UnitsInStock';
			}).format = ss.mkdel(this, this.$inputFormatter);
			Enumerable.from(columns).single(function(x2) {
				return x2.field === 'UnitsOnOrder';
			}).format = ss.mkdel(this, this.$inputFormatter);
			Enumerable.from(columns).single(function(x3) {
				return x3.field === 'ReorderLevel';
			}).format = ss.mkdel(this, this.$inputFormatter);
			return columns;
		},
		$inputsChange: function(e) {
			var cell = this.slickGrid.getCellFromEvent(e);
			var item = this.get_items()[cell.row];
			var field = this.getColumns()[cell.cell].field;
			var input = $(e.target);
			var text = ss.coalesce(Q.trimToNull(input.val()), '0');
			var pending = this.$pendingChanges[ss.unbox(item.ProductID)];
			var oldText = Q.formatNumber(this.$getEffectiveValue(item, field), '0.##');
			var value;
			if (field === 'UnitPrice') {
				value = Q.parseDecimal(text);
				if (ss.isNullOrUndefined(value) || isNaN(ss.unbox(value))) {
					Q.notifyError(Q.text('Validation.Decimal'), '', null);
					input.val(oldText);
					input.focus();
					return;
				}
			}
			else {
				var i = {};
				if (!ss.Int32.tryParse(text, i) || i.$ > 32767 || i.$ < 0) {
					Q.notifyError(Q.text('Validation.Integer'), '', null);
					input.val(oldText);
					input.focus();
					return;
				}
				value = i.$;
			}
			if (ss.isNullOrUndefined(pending)) {
				this.$pendingChanges[ss.unbox(item.ProductID)] = pending = {};
			}
			pending[field] = value;
			input.val(Q.formatNumber(value, '0.##')).addClass('dirty');
			this.$setSaveButtonState();
		},
		$setSaveButtonState: function() {
			this.toolbar.findButton('apply-changes-button').toggleClass('disabled', ss.getKeyCount(this.$pendingChanges) === 0);
		},
		$saveClick: function() {
			if (ss.getKeyCount(this.$pendingChanges) === 0) {
				return;
			}
			// this calls save service for all modified rows, one by one
			// you could write a batch update service
			var enumerator = new ss.ObjectEnumerator(Q.deepClone(this.$pendingChanges));
			var saveNext = null;
			saveNext = ss.mkdel(this, function() {
				if (!enumerator.moveNext()) {
					this.refresh();
					return;
				}
				var pair = enumerator.current();
				var entity = Q.deepClone(pair.value);
				entity.ProductID = pair.key;
				Q.serviceRequest('Northwind/Product/Update', { EntityId: pair.key, Entity: entity }, ss.mkdel(this, function(response) {
					delete this.$pendingChanges[pair.key];
					saveNext();
				}), null);
			});
			saveNext();
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_BasicSamples_CloneableEntityGrid, $asm, {}, $StudentIN_Northwind_ProductGrid, [Serenity.IDataGrid]);
	ss.initClass($StudentIN_BasicSamples_LookupFilterByMultipleDialog, $asm, {}, $StudentIN_Northwind_ProductDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_BasicSamples_LookupFilterByMultipleForm, $asm, {
		get_productName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ProductName');
		},
		get_productImage: function() {
			return this.byId(Serenity.ImageUploadEditor).call(this, 'ProductImage');
		},
		get_discontinued: function() {
			return this.byId(Serenity.BooleanEditor).call(this, 'Discontinued');
		},
		get_supplierID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'SupplierID');
		},
		get_categoryID: function() {
			return this.byId($StudentIN_BasicSamples_ProduceSeafoodCategoryEditor).call(this, 'CategoryID');
		},
		get_quantityPerUnit: function() {
			return this.byId(Serenity.StringEditor).call(this, 'QuantityPerUnit');
		},
		get_unitPrice: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'UnitPrice');
		},
		get_unitsInStock: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'UnitsInStock');
		},
		get_unitsOnOrder: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'UnitsOnOrder');
		},
		get_reorderLevel: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'ReorderLevel');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_BasicSamples_LookupFilterByMultipleGrid, $asm, {
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			// this has no relation to our lookup editor but as we'll allow picking only 
			// categories of Produce and Seafood in product dialog, it's better to show
			// only products from these categories in grid too
			var $t1 = this.get_view().params;
			$t1.Criteria = Serenity.Criteria.join($t1.Criteria, 'and', [['CategoryName'], 'in', [['Produce', 'Seafood']]]);
			return true;
		}
	}, $StudentIN_Northwind_ProductGrid, [Serenity.IDataGrid]);
	ss.initClass($StudentIN_Northwind_OrderDialog, $asm, {
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
		},
		getToolbarButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getToolbarButtons.call(this);
			buttons.push($StudentIN_Common_ReportHelper.createRenderButton('Northwind.OrderDetail', 'Invoice', 'export-pdf-button', 'pdf', ss.mkdel(this, function() {
				return { OrderID: this.get_entityId() };
			})));
			return buttons;
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_BasicSamples_MultiColumnDialog, $asm, {}, $StudentIN_Northwind_OrderDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_BasicSamples_MultiColumnGrid, $asm, {}, $StudentIN_Northwind_OrderGrid, [Serenity.IDataGrid]);
	ss.initClass($StudentIN_BasicSamples_MultiColumnResponsiveDialog, $asm, {}, $StudentIN_Northwind_OrderDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_BasicSamples_MultiColumnResponsiveGrid, $asm, {}, $StudentIN_Northwind_OrderGrid, [Serenity.IDataGrid]);
	ss.initClass($StudentIN_BasicSamples_OrderBulkAction, $asm, {
		getParallelRequests: function() {
			return 10;
		},
		getBatchSize: function() {
			return 5;
		},
		executeForBatch: function(batch) {
			Q.serviceRequest('BasicSamples/BasicSamples/OrderBulkAction', { OrderIDs: Enumerable.from(batch).select(function(x) {
				return parseInt(x, 10);
			}).toArray() }, ss.mkdel(this, function(response) {
				this.set_successCount(this.get_successCount() + batch.length);
			}), { blockUI: false, onError: ss.mkdel(this, function(response1) {
				this.set_errorCount(this.get_errorCount() + batch.length);
			}), onCleanup: ss.mkdel(this, this.serviceCallCleanup) });
		}
	}, $StudentIN_BulkServiceAction);
	ss.initClass($StudentIN_BasicSamples_ProduceSeafoodCategoryEditor, $asm, {
		getLookupKey: function() {
			return 'Northwind.Category';
		},
		getItems: function(lookup) {
			return Enumerable.from(ss.makeGenericType(Serenity.LookupEditorBase$2, [Serenity.LookupEditorOptions, Object]).prototype.getItems.call(this, lookup)).where(function(x) {
				return x.CategoryName === 'Produce' || x.CategoryName === 'Seafood';
			});
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_BasicSamples_ResponsiveDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_BasicSamples_ResponsiveGrid, $asm, {}, $StudentIN_Northwind_OrderGrid, [Serenity.IDataGrid]);
	ss.initClass($StudentIN_BasicSamples_ViewWithoutIDGrid, $asm, {
		onViewProcessData: function(response) {
			response = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewProcessData.call(this, response);
			// there is no __id property in SalesByCategoryRow but this is javascript and we can set any property of an object
			for (var $t1 = 0; $t1 < response.Entities.length; $t1++) {
				var x = response.Entities[$t1];
				x.__id = this.$nextId++;
			}
			return response;
		},
		getButtons: function() {
			return [];
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_Common_ExcelExportHelper, $asm, {});
	ss.initClass($StudentIN_Common_LanguageSelection, $asm, {}, Serenity.Widget);
	ss.initClass($StudentIN_Common_ReportHelper, $asm, {});
	ss.initClass($StudentIN_Common_SidebarSearch, $asm, {
		$updateMatchFlags: function(text) {
			var liList = this.$menuUL.find('li').removeClass('non-match');
			text = Q.trimToNull(text);
			if (ss.isNullOrUndefined(text)) {
				liList.show();
				liList.removeClass('expanded');
				return;
			}
			var parts = ss.netSplit(text, [44, 32].map(function(i) {
				return String.fromCharCode(i);
			}), null, 1);
			for (var i = 0; i < parts.length; i++) {
				parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
			}
			var items = liList;
			items.each(function(i1, e) {
				var x = $(e);
				var title = Select2.util.stripDiacritics(ss.coalesce(x.text(), '').toUpperCase());
				for (var $t1 = 0; $t1 < parts.length; $t1++) {
					var p = parts[$t1];
					if (ss.isValue(p) && !(title.indexOf(p) !== -1)) {
						x.addClass('non-match');
						break;
					}
				}
			});
			var matchingItems = items.not('.non-match');
			var visibles = matchingItems.parents('li').add(matchingItems);
			var nonVisibles = liList.not(visibles);
			nonVisibles.hide().addClass('non-match');
			visibles.show();
			liList.addClass('expanded');
		}
	}, Serenity.Widget);
	ss.initClass($StudentIN_Common_ThemeSelection, $asm, {
		$getCurrentTheme: function() {
			var skinClass = Enumerable.from(ss.coalesce($('body').attr('class'), '').split(String.fromCharCode(32))).firstOrDefault(function(x) {
				return ss.startsWithString(x, 'skin-');
			}, ss.getDefaultValue(String));
			if (ss.isValue(skinClass)) {
				return skinClass.substr(5);
			}
			return 'blue';
		}
	}, Serenity.Widget);
	ss.initClass($StudentIN_GeneralDefinitions_CityDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_GeneralDefinitions_CityEditor, $asm, {
		getLookupKey: function() {
			return 'StudentIN.City';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_GeneralDefinitions_CityForm, $asm, {
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_GeneralDefinitions_CityGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_GeneralDefinitions_ClassDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_GeneralDefinitions_ClassEditor, $asm, {
		getLookupKey: function() {
			return 'StudentIN.Class';
		},
		getItemText: function(item, lookup) {
			var text = item.Name + ' - ' + item.SessionName;
			return text;
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_GeneralDefinitions_ClassForm, $asm, {
		get_departmentId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'DepartmentId');
		},
		get_classCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ClassCode');
		},
		get_sessionName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'SessionName');
		},
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_GeneralDefinitions_ClassGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_GeneralDefinitions_ConsultantDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_GeneralDefinitions_ConsultantEditor, $asm, {
		getLookupKey: function() {
			return 'StudentIN.Consultant';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_GeneralDefinitions_ConsultantForm, $asm, {
		get_departmentId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'DepartmentId');
		},
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_GeneralDefinitions_ConsultantGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_GeneralDefinitions_DepartmentDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_GeneralDefinitions_DepartmentEditor, $asm, {
		getLookupKey: function() {
			return 'StudentIN.Department';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_GeneralDefinitions_DepartmentForm, $asm, {
		get_code: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'Code');
		},
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		},
		get_cityId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'CityId');
		},
		get_townId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'TownId');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_GeneralDefinitions_DepartmentGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_GeneralDefinitions_OccupationDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_GeneralDefinitions_OccupationEditor, $asm, {
		getLookupKey: function() {
			return 'StudentIN.Occupation';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_GeneralDefinitions_OccupationForm, $asm, {
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_GeneralDefinitions_OccupationGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_GeneralDefinitions_PaymentTypeDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_GeneralDefinitions_PaymentTypeEditor, $asm, {
		getLookupKey: function() {
			return 'StudentIN.PaymentType';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_GeneralDefinitions_PaymentTypeForm, $asm, {
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		},
		get_paymentAmount: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'PaymentAmount');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_GeneralDefinitions_PaymentTypeGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_GeneralDefinitions_RecordStateDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_GeneralDefinitions_RecordStateEditor, $asm, {
		getLookupKey: function() {
			return 'StudentIN.RecordState';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_GeneralDefinitions_RecordStateForm, $asm, {
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_GeneralDefinitions_RecordStateGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_GeneralDefinitions_RelativeDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_GeneralDefinitions_RelativeEditor, $asm, {
		getLookupKey: function() {
			return 'StudentIN.Relative';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_GeneralDefinitions_RelativeForm, $asm, {
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_GeneralDefinitions_RelativeGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_GeneralDefinitions_SchoolDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_GeneralDefinitions_SchoolEditor, $asm, {
		getLookupKey: function() {
			return 'StudentIN.School';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_GeneralDefinitions_SchoolForm, $asm, {
		get_departmentId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'DepartmentId');
		},
		get_code: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Code');
		},
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		},
		get_schoolGroupId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'SchoolGroupId');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_GeneralDefinitions_SchoolGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_GeneralDefinitions_SchoolGroupDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_GeneralDefinitions_SchoolGroupEditor, $asm, {
		getLookupKey: function() {
			return 'StudentIN.SchoolGroup';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_GeneralDefinitions_SchoolGroupForm, $asm, {
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_GeneralDefinitions_SchoolGroupGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_GeneralDefinitions_SectionDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_GeneralDefinitions_SectionEditor, $asm, {
		getLookupKey: function() {
			return 'StudentIN.Section';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_GeneralDefinitions_SectionForm, $asm, {
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_GeneralDefinitions_SectionGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_Membership_ChangePasswordForm, $asm, {
		get_oldPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'OldPassword');
		},
		get_newPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'NewPassword');
		},
		get_confirmPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'ConfirmPassword');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Membership_ChangePasswordPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($StudentIN_Membership_ForgotPasswordForm, $asm, {
		get_email: function() {
			return this.byId(Serenity.EmailEditor).call(this, 'Email');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Membership_ForgotPasswordPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($StudentIN_Membership_LoginForm, $asm, {
		get_username: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Username');
		},
		get_password: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'Password');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Membership_LoginPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($StudentIN_Membership_ResetPasswordForm, $asm, {
		get_newPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'NewPassword');
		},
		get_confirmPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'ConfirmPassword');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Membership_ResetPasswordPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($StudentIN_Membership_SignUpForm, $asm, {
		get_displayName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'DisplayName');
		},
		get_email: function() {
			return this.byId(Serenity.EmailEditor).call(this, 'Email');
		},
		get_confirmEmail: function() {
			return this.byId(Serenity.EmailEditor).call(this, 'ConfirmEmail');
		},
		get_password: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'Password');
		},
		get_confirmPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'ConfirmPassword');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Membership_SignUpPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($StudentIN_Northwind_CategoryDialog, $asm, {
		getLanguages: function() {
			return $StudentIN_LanguageList.get_value();
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_Northwind_CategoryForm, $asm, {
		get_categoryName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CategoryName');
		},
		get_description: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Description');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Northwind_CategoryGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_CustomerCustomerDemoDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_CustomerCustomerDemoForm, $asm, {
		get_customerID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerID');
		},
		get_customerTypeID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerTypeID');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Northwind_CustomerCustomerDemoGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'ID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'CustomerID', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'CustomerTypeID', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_Northwind_CustomerDemographicDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_CustomerDemographicForm, $asm, {
		get_customerTypeID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerTypeID');
		},
		get_customerDesc: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerDesc');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Northwind_CustomerDemographicGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'ID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'CustomerTypeID', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'CustomerDesc', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_Northwind_CustomerDialog, $asm, {
		$getSaveState: function() {
			try {
				return $.toJSON(this.getSaveEntity());
			}
			catch ($t1) {
				return null;
			}
		},
		loadResponse: function(data) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadResponse.call(this, data);
			this.$loadedState = this.$getSaveState();
		},
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
			Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.get_isNewOrDeleted());
			this.$ordersGrid.set_customerID(entity.CustomerID);
		},
		onSaveSuccess: function(response) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.onSaveSuccess.call(this, response);
			Q.reloadLookup('Northwind.Customer');
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_Northwind_CustomerEditor, $asm, {
		getLookupKey: function() {
			return 'Northwind.Customer';
		},
		getItemText: function(item, lookup) {
			return ss.makeGenericType(Serenity.LookupEditorBase$2, [Serenity.LookupEditorOptions, Object]).prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($StudentIN_Northwind_CustomerForm, $asm, {
		get_customerID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerID');
		},
		get_companyName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CompanyName');
		},
		get_contactName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactName');
		},
		get_contactTitle: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactTitle');
		},
		get_representatives: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'Representatives');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_city: function() {
			return this.byId(Serenity.StringEditor).call(this, 'City');
		},
		get_region: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Region');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_country: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Country');
		},
		get_phone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Phone');
		},
		get_fax: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Fax');
		},
		get_noteList: function() {
			return this.byId($StudentIN_Northwind_NotesEditor).call(this, 'NoteList');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Northwind_CustomerGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.CustomerCountry';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'Country', null, $t1, null, null, null);
			var $t2 = Serenity.LookupEditorOptions.$ctor();
			$t2.lookupKey = 'Northwind.CustomerCity';
			$t2.cascadeFrom = 'Country';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'City', null, $t2, null, null, null);
		},
		getButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.getButtons.call(this);
			buttons.push($StudentIN_Common_ExcelExportHelper.createToolButton(this, 'Northwind/Customer/ListExcel', ss.mkdel(this, this.onViewSubmit), 'Excel'));
			return buttons;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_CustomerOrderDialog, $asm, {
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			Serenity.EditorUtils.setReadOnly(this.form.get_customerID(), true);
		}
	}, $StudentIN_Northwind_OrderDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_Northwind_CustomerOrdersGrid, $asm, {
		getColumns: function() {
			return Enumerable.from(ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this)).where(function(x) {
				return x.field !== 'CustomerCompanyName';
			}).toArray();
		},
		initEntityDialog$1: function(itemType, dialog) {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.initEntityDialog$1.call(this, itemType, dialog);
			Serenity.SubDialogHelper.cascade(ss.cast(dialog, $StudentIN_Northwind_OrderDialog), this.get_element().closest('.ui-dialog'));
		},
		addButtonClick: function() {
			this.editItem({ CustomerID: this.get_customerID() });
		},
		getInitialTitle: function() {
			return null;
		},
		createToolbarExtensions: function() {
			$StudentIN_Northwind_OrderGrid.prototype.createToolbarExtensions.call(this);
			this.get_customerFilter().get_element().closest('.quick-filter-item').remove();
		},
		getGridCanLoad: function() {
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getGridCanLoad.call(this) && !ss.isNullOrEmptyString(this.$customerID);
		},
		get_customerID: function() {
			return this.$customerID;
		},
		set_customerID: function(value) {
			if (!ss.referenceEquals(this.$customerID, value)) {
				this.$customerID = value;
				this.setEquality('CustomerID', this.get_customerID());
				this.refresh();
			}
		}
	}, $StudentIN_Northwind_OrderGrid, [Serenity.IDataGrid]);
	ss.initClass($StudentIN_Northwind_EmployeeDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_EmployeeForm, $asm, {
		get_lastName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LastName');
		},
		get_firstName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'FirstName');
		},
		get_title: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Title');
		},
		get_titleOfCourtesy: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TitleOfCourtesy');
		},
		get_birthDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'BirthDate');
		},
		get_hireDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'HireDate');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_city: function() {
			return this.byId(Serenity.StringEditor).call(this, 'City');
		},
		get_region: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Region');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_country: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Country');
		},
		get_homePhone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'HomePhone');
		},
		get_extension: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Extension');
		},
		get_photo: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Photo');
		},
		get_notes: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Notes');
		},
		get_reportsTo: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'ReportsTo');
		},
		get_photoPath: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PhotoPath');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Northwind_EmployeeFormatter, $asm, {
		format: function(ctx) {
			var text = Q.htmlEncode(ctx.value);
			if (ss.isNullOrEmptyString(this.get_genderProperty())) {
				return text;
			}
			var gender = ss.safeCast(ctx.item[this.get_genderProperty()], ss.Int32);
			return "<span class='" + ((gender === 2) ? 'employee-symbol female' : 'employee-symbol male') + "'>" + text + '</span>';
		},
		get_genderProperty: function() {
			return this.$1$GenderPropertyField;
		},
		set_genderProperty: function(value) {
			this.$1$GenderPropertyField = value;
		},
		initializeColumn: function(column) {
			column.referencedFields = column.referencedFields || [];
			if (!ss.isNullOrEmptyString(this.get_genderProperty())) {
				column.referencedFields.push(this.get_genderProperty());
				return;
			}
		}
	}, null, [Serenity.ISlickFormatter, Serenity.IInitializeColumn]);
	ss.initClass($StudentIN_Northwind_EmployeeGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'EmployeeID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'LastName', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'FirstName', width: 80 });
			columns.push({ field: 'Title', width: 80 });
			columns.push({ field: 'TitleOfCourtesy', width: 80 });
			columns.push({ field: 'BirthDate', width: 80 });
			columns.push({ field: 'HireDate', width: 80 });
			columns.push({ field: 'Address', width: 80 });
			columns.push({ field: 'City', width: 80 });
			columns.push({ field: 'Region', width: 80 });
			columns.push({ field: 'PostalCode', width: 80 });
			columns.push({ field: 'Country', width: 80 });
			columns.push({ field: 'HomePhone', width: 80 });
			columns.push({ field: 'Extension', width: 80 });
			columns.push({ field: 'Photo', width: 80 });
			columns.push({ field: 'Notes', width: 80 });
			columns.push({ field: 'ReportsTo', width: 80 });
			columns.push({ field: 'PhotoPath', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_Northwind_EmployeeTerritoryDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_EmployeeTerritoryForm, $asm, {
		get_territoryID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TerritoryID');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Northwind_EmployeeTerritoryGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'EmployeeID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'TerritoryID', width: 200, format: this.itemLink(null, null, null, null, true) });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_Northwind_FreightFormatter, $asm, {
		format: function(ctx) {
			return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
		}
	}, null, [Serenity.ISlickFormatter]);
	ss.initEnum($StudentIN_Northwind_Gender, $asm, { Male: 1, Female: 2 });
	ss.initClass($StudentIN_Northwind_NoteDialog, $asm, {
		getTemplate: function() {
			return "<form id='~_Form' class='s-Form'><textarea id='~_Text' class='required'></textarea></form>";
		},
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				if (!this.validateForm()) {
					return;
				}
				if (!ss.staticEquals(this.okClick, null)) {
					this.okClick();
				}
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			return opt;
		},
		get_text: function() {
			return this.byId$1('Text').val();
		},
		set_text: function(value) {
			this.byId$1('Text').val(value);
		}
	}, Serenity.TemplatedDialog, [Serenity.IDialog]);
	ss.initClass($StudentIN_Northwind_NotesEditor, $asm, {
		getTemplate: function() {
			return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
		},
		$updateContent: function() {
			var noteList = this.byId$1('NoteList');
			noteList.children().remove();
			if (ss.isValue(this.$items)) {
				var index = 0;
				for (var $t1 = 0; $t1 < this.$items.length; $t1++) {
					var item = this.$items[$t1];
					var li = $('<li/>');
					$('<div/>').addClass('note-text').html(ss.coalesce(item.Text, '')).appendTo(li);
					$('<a/>').attr('href', '#').addClass('note-date').text(item.InsertUserDisplayName + ' - ' + Q.formatDate(Q.parseISODateTime(item.InsertDate), 'dd/MM/yyyy HH:mm')).data('index', index).appendTo(li).click(ss.mkdel(this, this.$editClick));
					$('<a/>').attr('href', '#').addClass('note-delete').attr('title', 'delete note').data('index', index).appendTo(li).click(ss.mkdel(this, this.$deleteClick));
					li.appendTo(noteList);
					index++;
				}
			}
		},
		$addClick: function() {
			var dlg = new $StudentIN_Northwind_NoteDialog();
			dlg.set_dialogTitle('Add Note');
			dlg.okClick = ss.mkdel(this, function() {
				var text = Q.trimToNull(dlg.get_text());
				if (ss.isNullOrUndefined(text)) {
					return;
				}
				this.$items = this.$items || [];
				ss.insert(this.$items, 0, { Text: text, InsertUserDisplayName: $StudentIN_Authorization.get_userDefinition().DisplayName, InsertDate: Q.formatISODateTimeUTC(new Date()) });
				this.$updateContent();
				dlg.dialogClose();
				this.set_isDirty(true);
				if (!ss.staticEquals(this.get_onChange(), null)) {
					this.get_onChange()();
				}
			});
			dlg.dialogOpen();
		},
		$editClick: function(e) {
			e.preventDefault();
			var index = $(e.target).data('index');
			var old = this.$items[index];
			var dlg = new $StudentIN_Northwind_NoteDialog();
			dlg.set_dialogTitle('Edit Note');
			dlg.set_text(old.Text);
			dlg.okClick = ss.mkdel(this, function() {
				var text = Q.trimToNull(dlg.get_text());
				if (ss.isNullOrUndefined(text)) {
					return;
				}
				this.$items[index].Text = text;
				this.$updateContent();
				dlg.dialogClose();
				this.set_isDirty(true);
				if (!ss.staticEquals(this.get_onChange(), null)) {
					this.get_onChange()();
				}
			});
			dlg.dialogOpen();
		},
		$deleteClick: function(e) {
			e.preventDefault();
			var index = $(e.target).data('index');
			Q.confirm('Delete this note?', ss.mkdel(this, function() {
				ss.removeAt(this.$items, index);
				this.$updateContent();
				this.set_isDirty(true);
				if (!ss.staticEquals(this.get_onChange(), null)) {
					this.get_onChange()();
				}
			}));
		},
		get_value: function() {
			return this.$items;
		},
		set_value: function(value) {
			this.$items = value || [];
			this.set_isDirty(false);
			this.$updateContent();
		},
		getEditValue: function(property, target) {
			target[property.name] = this.get_value();
		},
		setEditValue: function(source, property) {
			this.set_value(ss.cast(source[property.name], Array));
		},
		get_isDirty: function() {
			return this.$6$IsDirtyField;
		},
		set_isDirty: function(value) {
			this.$6$IsDirtyField = value;
		},
		get_onChange: function() {
			return this.$6$OnChangeField;
		},
		set_onChange: function(value) {
			this.$6$OnChangeField = value;
		}
	}, Serenity.TemplatedWidget, [Serenity.IGetEditValue, Serenity.ISetEditValue]);
	ss.initClass($StudentIN_Northwind_OrderDetailDialog, $asm, {}, ss.makeGenericType($StudentIN_Common_GridEditorDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_Northwind_OrderDetailForm, $asm, {
		get_productID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'ProductID');
		},
		get_unitPrice: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'UnitPrice');
		},
		get_quantity: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'Quantity');
		},
		get_discount: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'Discount');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Northwind_OrderDetailsEditor, $asm, {
		validateEntity: function(row, id) {
			row.ProductID = Serenity.IdExtensions.toInt32(row.ProductID);
			var sameProduct = Enumerable.from(this.view.getItems()).firstOrDefault(function(x) {
				return ss.referenceEquals(x.ProductID, row.ProductID);
			}, ss.getDefaultValue(Object));
			if (ss.isValue(sameProduct) && !ss.referenceEquals(this.id(sameProduct), id)) {
				Q.alert('This product is already in order details!');
				return false;
			}
			row.ProductName = Q.getLookup('Northwind.Product').get_itemById()[row.ProductID].ProductName;
			row.LineTotal = ss.coalesce(row.Quantity, 0) * ss.coalesce(row.UnitPrice, 0) - ss.coalesce(row.Discount, 0);
			return true;
		}
	}, ss.makeGenericType($StudentIN_Common_GridEditorBase$1, [Object]), [Serenity.IDataGrid, Serenity.ISetEditValue, Serenity.IGetEditValue]);
	ss.initClass($StudentIN_Northwind_OrderForm, $asm, {
		get_customerID: function() {
			return this.byId($StudentIN_Northwind_CustomerEditor).call(this, 'CustomerID');
		},
		get_orderDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'OrderDate');
		},
		get_requiredDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'RequiredDate');
		},
		get_employeeID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'EmployeeID');
		},
		get_detailList: function() {
			return this.byId($StudentIN_Northwind_OrderDetailsEditor).call(this, 'DetailList');
		},
		get_shippedDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'ShippedDate');
		},
		get_shipVia: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'ShipVia');
		},
		get_freight: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'Freight');
		},
		get_shipName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipName');
		},
		get_shipAddress: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipAddress');
		},
		get_shipCity: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipCity');
		},
		get_shipRegion: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipRegion');
		},
		get_shipPostalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipPostalCode');
		},
		get_shipCountry: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipCountry');
		}
	}, Serenity.PrefixedContext);
	ss.initEnum($StudentIN_Northwind_OrderShippingState, $asm, { NotShipped: 0, Shipped: 1 });
	ss.initClass($StudentIN_Northwind_PhoneEditor, $asm, {
		formatValue: function() {
			this.element.val(this.getFormattedValue());
		},
		getFormattedValue: function() {
			var value = this.element.val();
			if (this.get_multiple()) {
				return $StudentIN_Northwind_PhoneEditor.$formatMulti(value, $StudentIN_Northwind_PhoneEditor.$formatPhone);
			}
			return $StudentIN_Northwind_PhoneEditor.$formatPhone(value);
		},
		get_multiple: function() {
			return this.$5$MultipleField;
		},
		set_multiple: function(value) {
			this.$5$MultipleField = value;
		},
		get_value: function() {
			return this.getFormattedValue();
		},
		set_value: function(value) {
			this.element.val(value);
		}
	}, Serenity.StringEditor, [Serenity.IStringValue]);
	ss.initClass($StudentIN_Northwind_ProductForm, $asm, {
		get_productName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ProductName');
		},
		get_productImage: function() {
			return this.byId(Serenity.ImageUploadEditor).call(this, 'ProductImage');
		},
		get_discontinued: function() {
			return this.byId(Serenity.BooleanEditor).call(this, 'Discontinued');
		},
		get_supplierID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'SupplierID');
		},
		get_categoryID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'CategoryID');
		},
		get_quantityPerUnit: function() {
			return this.byId(Serenity.StringEditor).call(this, 'QuantityPerUnit');
		},
		get_unitPrice: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'UnitPrice');
		},
		get_unitsInStock: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'UnitsInStock');
		},
		get_unitsOnOrder: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'UnitsOnOrder');
		},
		get_reorderLevel: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'ReorderLevel');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Northwind_RegionDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_RegionForm, $asm, {
		get_regionID: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'RegionID');
		},
		get_regionDescription: function() {
			return this.byId(Serenity.StringEditor).call(this, 'RegionDescription');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Northwind_RegionGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_ShipperDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_ShipperForm, $asm, {
		get_companyName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CompanyName');
		},
		get_phone: function() {
			return this.byId($StudentIN_Northwind_PhoneEditor).call(this, 'Phone');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Northwind_ShipperFormatter, $asm, {
		format: function(ctx) {
			return "<span class='shipper-symbol shipper-" + ss.replaceAllString(ss.coalesce(ss.safeCast(ctx.value, String), ''), ' ', '') + "'>" + Q.htmlEncode(ctx.value) + '</span>';
		}
	}, null, [Serenity.ISlickFormatter]);
	ss.initClass($StudentIN_Northwind_ShipperGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_SupplierDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_SupplierForm, $asm, {
		get_companyName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CompanyName');
		},
		get_contactName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactName');
		},
		get_contactTitle: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactTitle');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_city: function() {
			return this.byId(Serenity.StringEditor).call(this, 'City');
		},
		get_region: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Region');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_country: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Country');
		},
		get_phone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Phone');
		},
		get_fax: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Fax');
		},
		get_homePage: function() {
			return this.byId(Serenity.StringEditor).call(this, 'HomePage');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Northwind_SupplierGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Supplier.Country') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.SupplierCountry';
			this.$country = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$country, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			this.setEquality('Country', this.$country.get_value());
			return true;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_TerritoryDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_Northwind_TerritoryForm, $asm, {
		get_territoryID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TerritoryID');
		},
		get_territoryDescription: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TerritoryDescription');
		},
		get_regionID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'RegionID');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_Northwind_TerritoryGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Territory.RegionDescription') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.Region';
			this.$region = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$region, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			this.setEquality('RegionID', Serenity.IdExtensions.convertToId(this.$region.get_value()));
			return true;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($StudentIN_StudentMain_InvoiceInformationDialog, $asm, {
		get_studentId: function() {
			return this.$studentId;
		},
		set_studentId: function(value) {
			this.$studentId = value;
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_StudentMain_InvoiceInformationForm, $asm, {
		get_departmentId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'DepartmentId');
		},
		get_studentId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'StudentId');
		},
		get_invoicedPersonName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'InvoicedPersonName');
		},
		get_invoicedPersonSurname: function() {
			return this.byId(Serenity.StringEditor).call(this, 'InvoicedPersonSurname');
		},
		get_phone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Phone');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_cityId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'CityId');
		},
		get_invoiceNameForParent: function() {
			return this.byId(Serenity.BooleanEditor).call(this, 'InvoiceNameForParent');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_StudentMain_InvoiceInformationGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_StudentMain_PaymentDialog, $asm, {
		get_studentId: function() {
			return this.$studentId;
		},
		set_studentId: function(value) {
			this.$studentId = value;
		},
		getSaveEntity: function() {
			var entity = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getSaveEntity.call(this);
			if (!this.get_isNew() && ss.isValue(entity.StudentId)) {
				entity.StudentId = this.get_studentId();
			}
			return entity;
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_StudentMain_PaymentForm, $asm, {
		get_departmentId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'DepartmentId');
		},
		get_studentId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'StudentId');
		},
		get_paymentDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'PaymentDate');
		},
		get_paymentDateTime: function() {
			return this.byId(Serenity.DateEditor).call(this, 'PaymentDateTime');
		},
		get_amount: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'Amount');
		},
		get_paymentType: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PaymentType');
		},
		get_documentNo: function() {
			return this.byId(Serenity.StringEditor).call(this, 'DocumentNo');
		},
		get_description: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Description');
		},
		get_paymentNo: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'PaymentNo');
		},
		get_isDeposit: function() {
			return this.byId(Serenity.BooleanEditor).call(this, 'IsDeposit');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_StudentMain_PaymentGrid, $asm, {
		usePager: function() {
			return false;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_StudentMain_PaymentInstallmentDialog, $asm, {
		get_studentId: function() {
			return this.$studentId;
		},
		set_studentId: function(value) {
			this.$studentId = value;
		},
		getSaveEntity: function() {
			var entity = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getSaveEntity.call(this);
			if (!this.get_isNew() && ss.isValue(entity.StudentId)) {
				entity.StudentId = this.get_studentId();
			}
			return entity;
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_StudentMain_PaymentInstallmentForm, $asm, {
		get_createdBy: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CreatedBy');
		},
		get_createdDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'CreatedDate');
		},
		get_lastModifiedBy: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LastModifiedBy');
		},
		get_lastModifiedDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'LastModifiedDate');
		},
		get_installmentPhoto: function() {
			return this.byId(Serenity.BooleanEditor).call(this, 'InstallmentPhoto');
		},
		get_departmentId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'DepartmentId');
		},
		get_studentId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'StudentId');
		},
		get_installmentDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'InstallmentDate');
		},
		get_installmentAmount: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'InstallmentAmount');
		},
		get_paymentAmount: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'PaymentAmount');
		},
		get_description: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Description');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_StudentMain_PaymentInstallmentGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_StudentMain_StudentDialog, $asm, {
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
			Serenity.TabsExtensions.setDisabled(this.tabs, 'Payment', this.get_isNewOrDeleted());
			Serenity.TabsExtensions.setDisabled(this.tabs, 'PaymentInstallment', this.get_isNewOrDeleted());
			this.$gridPayment.set_studentId(this.get_entityId());
			this.$gridPaymentInstallment.set_studentId(this.get_entityId());
			this.$gridPaymentInstallment.set_studentId(this.get_entityId());
			this.$gridStudentDiscount.set_studentId(this.get_entityId());
			this.$gridInvoiceInformation.set_studentId(this.get_entityId());
			//if (IsNew)
			//    form..Value = OlayDurumu.YeniOlay.ToString();
		},
		$initializeFormFlexify: function() {
			this.get_element().find('.categories');
			this.byId$1('PaymentGrid').height(470).width(700);
			this.byId$1('PaymentInstallmentGrid').height(470).width(700);
			this.byId$1('StudentDiscountGrid').height(470).width(700);
			this.byId$1('InvoiceInformationGrid').height(470).width(700);
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_StudentMain_StudentDiscountDialog, $asm, {
		get_studentId: function() {
			return this.$studentId;
		},
		set_studentId: function(value) {
			this.$studentId = value;
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($StudentIN_StudentMain_StudentDiscountForm, $asm, {
		get_departmentId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'DepartmentId');
		},
		get_studentId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'StudentId');
		},
		get_discountTypeId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'DiscountTypeId');
		},
		get_orderNo: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'OrderNo');
		},
		get_discountPercent: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'DiscountPercent');
		},
		get_discountAmount: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'DiscountAmount');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_StudentMain_StudentDiscountGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_StudentMain_StudentForm, $asm, {
		get_departmentId: function() {
			return this.byId($StudentIN_GeneralDefinitions_DepartmentEditor).call(this, 'DepartmentId');
		},
		get_no: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'No');
		},
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		},
		get_surname: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Surname');
		},
		get_gender: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Gender');
		},
		get_preEnrollmentDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'PreEnrollmentDate');
		},
		get_enrollmentDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'EnrollmentDate');
		},
		get_identityNumber: function() {
			return this.byId(Serenity.StringEditor).call(this, 'IdentityNumber');
		},
		get_groupPhoto: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'GroupPhoto');
		},
		get_photo: function() {
			return this.byId(Serenity.BooleanEditor).call(this, 'Photo');
		},
		get_graduated: function() {
			return this.byId(Serenity.BooleanEditor).call(this, 'Graduated');
		},
		get_sectionId: function() {
			return this.byId($StudentIN_GeneralDefinitions_SectionEditor).call(this, 'SectionId');
		},
		get_classId: function() {
			return this.byId($StudentIN_GeneralDefinitions_ClassEditor).call(this, 'ClassId');
		},
		get_schoolId: function() {
			return this.byId($StudentIN_GeneralDefinitions_SchoolEditor).call(this, 'SchoolId');
		},
		get_consultantIId: function() {
			return this.byId($StudentIN_GeneralDefinitions_ConsultantEditor).call(this, 'ConsultantIId');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_phone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Phone');
		},
		get_mobilePhone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'MobilePhone');
		},
		get_eMail: function() {
			return this.byId(Serenity.StringEditor).call(this, 'EMail');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_cityId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'CityId');
		},
		get_parentName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ParentName');
		},
		get_parentSurname: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ParentSurname');
		},
		get_parentOccupationId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'ParentOccupationId');
		},
		get_relativeId: function() {
			return this.byId($StudentIN_GeneralDefinitions_RelativeEditor).call(this, 'RelativeId');
		},
		get_parentMobile: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ParentMobile');
		},
		get_parentPhone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ParentPhone');
		},
		get_parentHomeAddress: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ParentHomeAddress');
		},
		get_parentPostalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ParentPostalCode');
		},
		get_parentCityId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'ParentCityId');
		},
		get_parentWorkPhone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ParentWorkPhone');
		},
		get_parentWorkAddress: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ParentWorkAddress');
		},
		get_parentWorkPostalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ParentWorkPostalCode');
		},
		get_parentWorkCityId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'ParentWorkCityId');
		},
		get_parentIdentityNumber: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ParentIdentityNumber');
		},
		get_isRecorded: function() {
			return this.byId(Serenity.BooleanEditor).call(this, 'IsRecorded');
		},
		get_recordCancelDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'RecordCancelDate');
		},
		get_recordStateId: function() {
			return this.byId($StudentIN_GeneralDefinitions_RecordStateEditor).call(this, 'RecordStateId');
		},
		get_paymentTypeId: function() {
			return this.byId($StudentIN_GeneralDefinitions_PaymentTypeEditor).call(this, 'PaymentTypeId');
		},
		get_discountUserId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'DiscountUserId');
		},
		get_discountDescription: function() {
			return this.byId(Serenity.StringEditor).call(this, 'DiscountDescription');
		},
		get_createdBy: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CreatedBy');
		},
		get_createdDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'CreatedDate');
		},
		get_lastModifiedBy: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LastModifiedBy');
		},
		get_lastModifiedDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'LastModifiedDate');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($StudentIN_StudentMain_StudentGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($StudentIN_StudentMain_SubInvoiceInformationGrid, $asm, {
		get_studentId: function() {
			return this.$studentId;
		},
		set_studentId: function(value) {
			if (!ss.referenceEquals(this.$studentId, value)) {
				this.$studentId = value;
				this.refresh();
			}
		},
		getInitialTitle: function() {
			return null;
		},
		getGridCanLoad: function() {
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getGridCanLoad.call(this) && ss.isValue(this.$studentId);
		},
		initEntityDialog$1: function(itemType, dialog) {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.initEntityDialog$1.call(this, itemType, dialog);
			Serenity.SubDialogHelper.cascade(ss.cast(dialog, $StudentIN_StudentMain_InvoiceInformationDialog), this.get_element().closest('.ui-dialog'));
		},
		addButtonClick: function() {
			this.editItem({ StudentId: this.get_studentId() });
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			var request = this.view.params;
			request.EqualityFilter = request.EqualityFilter || {};
			if (ss.isValue(this.$studentId)) {
				request.EqualityFilter['StudentId'] = ss.unbox(this.get_studentId());
			}
			return true;
		},
		createEntityDialog: function(itemType, callback) {
			var dialog = ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createEntityDialog.call(this, itemType, callback);
			if (ss.referenceEquals(itemType, this.getItemType())) {
				dialog.set_studentId(ss.unbox(this.get_studentId()));
			}
			return dialog;
		}
	}, $StudentIN_StudentMain_InvoiceInformationGrid, [Serenity.IDataGrid]);
	ss.initClass($StudentIN_StudentMain_SubPaymentGrid, $asm, {
		get_studentId: function() {
			return this.$studentId;
		},
		set_studentId: function(value) {
			if (!ss.referenceEquals(this.$studentId, value)) {
				this.$studentId = value;
				this.refresh();
			}
		},
		getInitialTitle: function() {
			return null;
		},
		getGridCanLoad: function() {
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getGridCanLoad.call(this) && ss.isValue(this.$studentId);
		},
		initEntityDialog$1: function(itemType, dialog) {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.initEntityDialog$1.call(this, itemType, dialog);
			Serenity.SubDialogHelper.cascade(ss.cast(dialog, $StudentIN_StudentMain_PaymentDialog), this.get_element().closest('.ui-dialog'));
		},
		addButtonClick: function() {
			this.editItem({ StudentId: this.get_studentId() });
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			var request = this.view.params;
			request.EqualityFilter = request.EqualityFilter || {};
			if (ss.isValue(this.$studentId)) {
				request.EqualityFilter['StudentId'] = ss.unbox(this.get_studentId());
			}
			return true;
		},
		createEntityDialog: function(itemType, callback) {
			var dialog = ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createEntityDialog.call(this, itemType, callback);
			if (ss.referenceEquals(itemType, this.getItemType())) {
				dialog.set_studentId(ss.unbox(this.get_studentId()));
			}
			return dialog;
		}
	}, $StudentIN_StudentMain_PaymentGrid, [Serenity.IDataGrid]);
	ss.initClass($StudentIN_StudentMain_SubPaymentInstallmentGrid, $asm, {
		get_studentId: function() {
			return this.$studentId;
		},
		set_studentId: function(value) {
			if (!ss.referenceEquals(this.$studentId, value)) {
				this.$studentId = value;
				this.refresh();
			}
		},
		getInitialTitle: function() {
			return null;
		},
		getGridCanLoad: function() {
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getGridCanLoad.call(this) && ss.isValue(this.$studentId);
		},
		initEntityDialog$1: function(itemType, dialog) {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.initEntityDialog$1.call(this, itemType, dialog);
			Serenity.SubDialogHelper.cascade(ss.cast(dialog, $StudentIN_StudentMain_PaymentInstallmentDialog), this.get_element().closest('.ui-dialog'));
		},
		addButtonClick: function() {
			this.editItem({ StudentId: this.get_studentId() });
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			var request = this.view.params;
			request.EqualityFilter = request.EqualityFilter || {};
			if (ss.isValue(this.$studentId)) {
				request.EqualityFilter['StudentId'] = ss.unbox(this.get_studentId());
			}
			return true;
		},
		createEntityDialog: function(itemType, callback) {
			var dialog = ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createEntityDialog.call(this, itemType, callback);
			if (ss.referenceEquals(itemType, this.getItemType())) {
				dialog.set_studentId(ss.unbox(this.get_studentId()));
			}
			return dialog;
		}
	}, $StudentIN_StudentMain_PaymentInstallmentGrid, [Serenity.IDataGrid]);
	ss.initClass($StudentIN_StudentMain_SubStudentDiscountGrid, $asm, {
		get_studentId: function() {
			return this.$studentId;
		},
		set_studentId: function(value) {
			if (!ss.referenceEquals(this.$studentId, value)) {
				this.$studentId = value;
				this.refresh();
			}
		},
		getInitialTitle: function() {
			return null;
		},
		getGridCanLoad: function() {
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getGridCanLoad.call(this) && ss.isValue(this.$studentId);
		},
		initEntityDialog$1: function(itemType, dialog) {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.initEntityDialog$1.call(this, itemType, dialog);
			Serenity.SubDialogHelper.cascade(ss.cast(dialog, $StudentIN_StudentMain_StudentDiscountDialog), this.get_element().closest('.ui-dialog'));
		},
		addButtonClick: function() {
			this.editItem({ StudentId: this.get_studentId() });
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			var request = this.view.params;
			request.EqualityFilter = request.EqualityFilter || {};
			if (ss.isValue(this.$studentId)) {
				request.EqualityFilter['StudentId'] = ss.unbox(this.get_studentId());
			}
			return true;
		},
		createEntityDialog: function(itemType, callback) {
			var dialog = ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createEntityDialog.call(this, itemType, callback);
			if (ss.referenceEquals(itemType, this.getItemType())) {
				dialog.set_studentId(ss.unbox(this.get_studentId()));
			}
			return dialog;
		}
	}, $StudentIN_StudentMain_StudentDiscountGrid, [Serenity.IDataGrid]);
	ss.setMetadata($Serenity_HtmlBasicContentEditor, { attr: [new Serenity.EditorAttribute(), new System.ComponentModel.DisplayNameAttribute('Html Content (Basic Set)'), new Serenity.OptionsTypeAttribute(Serenity.HtmlContentEditorOptions), new Serenity.ElementAttribute('<textarea />')] });
	ss.setMetadata($StudentIN_Administration_LanguageDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('LanguageName'), new Serenity.FormKeyAttribute('Administration.Language'), new Serenity.LocalTextPrefixAttribute('Administration.Language'), new Serenity.ServiceAttribute('Administration/Language')] });
	ss.setMetadata($StudentIN_Administration_LanguageGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Language'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('LanguageName'), new Serenity.DialogTypeAttribute($StudentIN_Administration_LanguageDialog), new Serenity.LocalTextPrefixAttribute('Administration.Language'), new Serenity.ServiceAttribute('Administration/Language')] });
	ss.setMetadata($StudentIN_Administration_PermissionCheckEditor, { attr: [new Serenity.EditorAttribute(), new Serenity.IdPropertyAttribute('Key')] });
	ss.setMetadata($StudentIN_Administration_PermissionModuleEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_Administration_RoleCheckEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_Administration_RoleDialog, { attr: [new Serenity.IdPropertyAttribute('RoleId'), new Serenity.NamePropertyAttribute('RoleName'), new Serenity.FormKeyAttribute('Administration.Role'), new Serenity.LocalTextPrefixAttribute('Administration.Role'), new Serenity.ServiceAttribute('Administration/Role')] });
	ss.setMetadata($StudentIN_Administration_RoleGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Role'), new Serenity.IdPropertyAttribute('RoleId'), new Serenity.NamePropertyAttribute('RoleName'), new Serenity.DialogTypeAttribute($StudentIN_Administration_RoleDialog), new Serenity.LocalTextPrefixAttribute('Administration.Role'), new Serenity.ServiceAttribute('Administration/Role')] });
	ss.setMetadata($StudentIN_Administration_TranslationGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Translation'), new Serenity.IdPropertyAttribute('Key'), new Serenity.LocalTextPrefixAttribute('Administration.Translation'), new Serenity.ServiceAttribute('Administration/Translation')] });
	ss.setMetadata($StudentIN_Administration_UserDialog, { attr: [new Serenity.IdPropertyAttribute('UserId'), new Serenity.NamePropertyAttribute('Username'), new Serenity.IsActivePropertyAttribute('IsActive'), new Serenity.FormKeyAttribute('Administration.User'), new Serenity.LocalTextPrefixAttribute('Administration.User'), new Serenity.ServiceAttribute('Administration/User')] });
	ss.setMetadata($StudentIN_Administration_UserGrid, { attr: [new Serenity.IdPropertyAttribute('UserId'), new Serenity.NamePropertyAttribute('Username'), new Serenity.IsActivePropertyAttribute('IsActive'), new Serenity.DialogTypeAttribute($StudentIN_Administration_UserDialog), new Serenity.LocalTextPrefixAttribute('Administration.User'), new Serenity.ServiceAttribute('Administration/User')] });
	ss.setMetadata($StudentIN_BasicSamples_ChartInDialog, { attr: [new Serenity.ResizableAttribute(), new Serenity.MaximizableAttribute()] });
	ss.setMetadata($StudentIN_BasicSamples_CloneableEntityDialog, { attr: [new Serenity.ResponsiveAttribute(), new Serenity.MaximizableAttribute()] });
	ss.setMetadata($StudentIN_BasicSamples_CloneableEntityGrid, { attr: [new Serenity.DialogTypeAttribute($StudentIN_BasicSamples_CloneableEntityDialog)] });
	ss.setMetadata($StudentIN_BasicSamples_LookupFilterByMultipleDialog, { attr: [new Serenity.ResponsiveAttribute(), new Serenity.MaximizableAttribute(), new Serenity.FormKeyAttribute('BasicSamples.LookupFilterByMultiple')] });
	ss.setMetadata($StudentIN_BasicSamples_LookupFilterByMultipleGrid, { attr: [new Serenity.DialogTypeAttribute($StudentIN_BasicSamples_LookupFilterByMultipleDialog)] });
	ss.setMetadata($StudentIN_BasicSamples_MultiColumnGrid, { attr: [new Serenity.DialogTypeAttribute($StudentIN_BasicSamples_MultiColumnDialog)] });
	ss.setMetadata($StudentIN_BasicSamples_MultiColumnResponsiveDialog, { attr: [new Serenity.ResponsiveAttribute()] });
	ss.setMetadata($StudentIN_BasicSamples_MultiColumnResponsiveGrid, { attr: [new Serenity.DialogTypeAttribute($StudentIN_BasicSamples_MultiColumnResponsiveDialog)] });
	ss.setMetadata($StudentIN_BasicSamples_ResponsiveDialog, { attr: [new Serenity.IdPropertyAttribute('OrderID'), new Serenity.NamePropertyAttribute('OrderID'), new Serenity.FormKeyAttribute('Northwind.Order'), new Serenity.LocalTextPrefixAttribute('Northwind.Order'), new Serenity.ServiceAttribute('Northwind/Order'), new Serenity.ResponsiveAttribute(), new Serenity.MaximizableAttribute()] });
	ss.setMetadata($StudentIN_BasicSamples_ResponsiveGrid, { attr: [new Serenity.DialogTypeAttribute($StudentIN_BasicSamples_ResponsiveDialog)] });
	ss.setMetadata($StudentIN_BasicSamples_ViewWithoutIDGrid, { attr: [new Serenity.IdPropertyAttribute('__id'), new Serenity.ColumnsKeyAttribute('Northwind.SalesByCategory'), new Serenity.NamePropertyAttribute('CategoryName'), new Serenity.LocalTextPrefixAttribute('Northwind.SalesByCategory'), new Serenity.ServiceAttribute('Northwind/SalesByCategory')] });
	ss.setMetadata($StudentIN_Common_GridEditorBase$1, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.EditorAttribute(), new Serenity.IdPropertyAttribute('__id')] });
	ss.setMetadata($StudentIN_Common_GridEditorDialog$1, { attr: [new Serenity.IdPropertyAttribute('__id')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_CityDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FormKeyAttribute('GeneralDefinitions.City'), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.City'), new Serenity.ServiceAttribute('GeneralDefinitions/City')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_CityEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_GeneralDefinitions_CityGrid, { attr: [new Serenity.ColumnsKeyAttribute('GeneralDefinitions.City'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($StudentIN_GeneralDefinitions_CityDialog), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.City'), new Serenity.ServiceAttribute('GeneralDefinitions/City')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_ClassDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('ClassCode'), new Serenity.FormKeyAttribute('GeneralDefinitions.Class'), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.Class'), new Serenity.ServiceAttribute('GeneralDefinitions/Class')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_ClassEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_GeneralDefinitions_ClassGrid, { attr: [new Serenity.ColumnsKeyAttribute('GeneralDefinitions.Class'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('ClassCode'), new Serenity.DialogTypeAttribute($StudentIN_GeneralDefinitions_ClassDialog), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.Class'), new Serenity.ServiceAttribute('GeneralDefinitions/Class')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_ConsultantDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FormKeyAttribute('GeneralDefinitions.Consultant'), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.Consultant'), new Serenity.ServiceAttribute('GeneralDefinitions/Consultant')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_ConsultantEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_GeneralDefinitions_ConsultantGrid, { attr: [new Serenity.ColumnsKeyAttribute('GeneralDefinitions.Consultant'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($StudentIN_GeneralDefinitions_ConsultantDialog), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.Consultant'), new Serenity.ServiceAttribute('GeneralDefinitions/Consultant')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_DepartmentDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FormKeyAttribute('GeneralDefinitions.Department'), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.Department'), new Serenity.ServiceAttribute('GeneralDefinitions/Department')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_DepartmentEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_GeneralDefinitions_DepartmentGrid, { attr: [new Serenity.ColumnsKeyAttribute('GeneralDefinitions.Department'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($StudentIN_GeneralDefinitions_DepartmentDialog), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.Department'), new Serenity.ServiceAttribute('GeneralDefinitions/Department')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_OccupationDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FormKeyAttribute('GeneralDefinitions.Occupation'), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.Occupation'), new Serenity.ServiceAttribute('GeneralDefinitions/Occupation')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_OccupationEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_GeneralDefinitions_OccupationGrid, { attr: [new Serenity.ColumnsKeyAttribute('GeneralDefinitions.Occupation'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($StudentIN_GeneralDefinitions_OccupationDialog), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.Occupation'), new Serenity.ServiceAttribute('GeneralDefinitions/Occupation')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_PaymentTypeDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FormKeyAttribute('GeneralDefinitions.PaymentType'), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.PaymentType'), new Serenity.ServiceAttribute('GeneralDefinitions/PaymentType')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_PaymentTypeEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_GeneralDefinitions_PaymentTypeGrid, { attr: [new Serenity.ColumnsKeyAttribute('GeneralDefinitions.PaymentType'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($StudentIN_GeneralDefinitions_PaymentTypeDialog), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.PaymentType'), new Serenity.ServiceAttribute('GeneralDefinitions/PaymentType')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_RecordStateDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FormKeyAttribute('GeneralDefinitions.RecordState'), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.RecordState'), new Serenity.ServiceAttribute('GeneralDefinitions/RecordState')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_RecordStateEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_GeneralDefinitions_RecordStateGrid, { attr: [new Serenity.ColumnsKeyAttribute('GeneralDefinitions.RecordState'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($StudentIN_GeneralDefinitions_RecordStateDialog), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.RecordState'), new Serenity.ServiceAttribute('GeneralDefinitions/RecordState')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_RelativeDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FormKeyAttribute('GeneralDefinitions.Relative'), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.Relative'), new Serenity.ServiceAttribute('GeneralDefinitions/Relative')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_RelativeEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_GeneralDefinitions_RelativeGrid, { attr: [new Serenity.ColumnsKeyAttribute('GeneralDefinitions.Relative'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($StudentIN_GeneralDefinitions_RelativeDialog), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.Relative'), new Serenity.ServiceAttribute('GeneralDefinitions/Relative')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_SchoolDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FormKeyAttribute('GeneralDefinitions.School'), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.School'), new Serenity.ServiceAttribute('GeneralDefinitions/School')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_SchoolEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_GeneralDefinitions_SchoolGrid, { attr: [new Serenity.ColumnsKeyAttribute('GeneralDefinitions.School'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($StudentIN_GeneralDefinitions_SchoolDialog), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.School'), new Serenity.ServiceAttribute('GeneralDefinitions/School')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_SchoolGroupDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FormKeyAttribute('GeneralDefinitions.SchoolGroup'), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.SchoolGroup'), new Serenity.ServiceAttribute('GeneralDefinitions/SchoolGroup')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_SchoolGroupEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_GeneralDefinitions_SchoolGroupGrid, { attr: [new Serenity.ColumnsKeyAttribute('GeneralDefinitions.SchoolGroup'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($StudentIN_GeneralDefinitions_SchoolGroupDialog), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.SchoolGroup'), new Serenity.ServiceAttribute('GeneralDefinitions/SchoolGroup')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_SectionDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FormKeyAttribute('GeneralDefinitions.Section'), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.Section'), new Serenity.ServiceAttribute('GeneralDefinitions/Section')] });
	ss.setMetadata($StudentIN_GeneralDefinitions_SectionEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_GeneralDefinitions_SectionGrid, { attr: [new Serenity.ColumnsKeyAttribute('GeneralDefinitions.Section'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($StudentIN_GeneralDefinitions_SectionDialog), new Serenity.LocalTextPrefixAttribute('GeneralDefinitions.Section'), new Serenity.ServiceAttribute('GeneralDefinitions/Section')] });
	ss.setMetadata($StudentIN_Membership_ChangePasswordPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.ChangePassword')] });
	ss.setMetadata($StudentIN_Membership_ForgotPasswordPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.ForgotPassword')] });
	ss.setMetadata($StudentIN_Membership_LoginPanel, { attr: [new Serenity.FormKeyAttribute('Membership.Login')] });
	ss.setMetadata($StudentIN_Membership_ResetPasswordPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.ResetPassword')] });
	ss.setMetadata($StudentIN_Membership_SignUpPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.SignUp')] });
	ss.setMetadata($StudentIN_Northwind_CategoryDialog, { attr: [new Serenity.IdPropertyAttribute('CategoryID'), new Serenity.NamePropertyAttribute('CategoryName'), new Serenity.FormKeyAttribute('Northwind.Category'), new Serenity.LocalTextPrefixAttribute('Northwind.Category'), new Serenity.ServiceAttribute('Northwind/Category')] });
	ss.setMetadata($StudentIN_Northwind_CategoryGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Category'), new Serenity.IdPropertyAttribute('CategoryID'), new Serenity.NamePropertyAttribute('CategoryName'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_CategoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Category'), new Serenity.ServiceAttribute('Northwind/Category')] });
	ss.setMetadata($StudentIN_Northwind_CustomerCustomerDemoDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.FormKeyAttribute('Northwind.CustomerCustomerDemo'), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerCustomerDemo'), new Serenity.ServiceAttribute('Northwind/CustomerCustomerDemo')] });
	ss.setMetadata($StudentIN_Northwind_CustomerCustomerDemoGrid, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_CustomerCustomerDemoDialog), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerCustomerDemo'), new Serenity.ServiceAttribute('Northwind/CustomerCustomerDemo')] });
	ss.setMetadata($StudentIN_Northwind_CustomerDemographicDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerTypeID'), new Serenity.FormKeyAttribute('Northwind.CustomerDemographic'), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerDemographic'), new Serenity.ServiceAttribute('Northwind/CustomerDemographic')] });
	ss.setMetadata($StudentIN_Northwind_CustomerDemographicGrid, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerTypeID'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_CustomerDemographicDialog), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerDemographic'), new Serenity.ServiceAttribute('Northwind/CustomerDemographic')] });
	ss.setMetadata($StudentIN_Northwind_CustomerDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.FlexifyAttribute(), new Serenity.MaximizableAttribute(), new Serenity.FormKeyAttribute('Northwind.Customer'), new Serenity.LocalTextPrefixAttribute('Northwind.Customer'), new Serenity.ServiceAttribute('Northwind/Customer')] });
	ss.setMetadata($StudentIN_Northwind_CustomerGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Customer'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_CustomerDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Customer'), new Serenity.ServiceAttribute('Northwind/Customer')] });
	ss.setMetadata($StudentIN_Northwind_CustomerOrdersGrid, { attr: [new Serenity.DialogTypeAttribute($StudentIN_Northwind_CustomerOrderDialog)] });
	ss.setMetadata($StudentIN_Northwind_EmployeeDialog, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('LastName'), new Serenity.FormKeyAttribute('Northwind.Employee'), new Serenity.LocalTextPrefixAttribute('Northwind.Employee'), new Serenity.ServiceAttribute('Northwind/Employee')] });
	ss.setMetadata($StudentIN_Northwind_EmployeeFormatter, { members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'GenderProperty', type: 16, returnType: String, getter: { name: 'get_GenderProperty', type: 8, sname: 'get_genderProperty', returnType: String, params: [] }, setter: { name: 'set_GenderProperty', type: 8, sname: 'set_genderProperty', returnType: Object, params: [String] } }] });
	ss.setMetadata($StudentIN_Northwind_EmployeeGrid, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('LastName'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_EmployeeDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Employee'), new Serenity.ServiceAttribute('Northwind/Employee')] });
	ss.setMetadata($StudentIN_Northwind_EmployeeTerritoryDialog, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.FormKeyAttribute('Northwind.EmployeeTerritory'), new Serenity.LocalTextPrefixAttribute('Northwind.EmployeeTerritory'), new Serenity.ServiceAttribute('Northwind/EmployeeTerritory')] });
	ss.setMetadata($StudentIN_Northwind_EmployeeTerritoryGrid, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_EmployeeTerritoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.EmployeeTerritory'), new Serenity.ServiceAttribute('Northwind/EmployeeTerritory')] });
	ss.setMetadata($StudentIN_Northwind_Gender, { attr: [new Serenity.EnumKeyAttribute('StudentIN.Northwind.Entities.Gender')] });
	ss.setMetadata($StudentIN_Northwind_NotesEditor, { attr: [new Serenity.EditorAttribute(), new Serenity.ElementAttribute('<div/>')] });
	ss.setMetadata($StudentIN_Northwind_OrderDetailDialog, { attr: [new Serenity.FormKeyAttribute('Northwind.OrderDetail'), new Serenity.LocalTextPrefixAttribute('Northwind.OrderDetail')] });
	ss.setMetadata($StudentIN_Northwind_OrderDetailsEditor, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.OrderDetail'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_OrderDetailDialog), new Serenity.LocalTextPrefixAttribute('Northwind.OrderDetail')] });
	ss.setMetadata($StudentIN_Northwind_OrderDialog, { attr: [new Serenity.IdPropertyAttribute('OrderID'), new Serenity.NamePropertyAttribute('OrderID'), new Serenity.FlexifyAttribute(), new Serenity.MaximizableAttribute(), new Serenity.FormKeyAttribute('Northwind.Order'), new Serenity.LocalTextPrefixAttribute('Northwind.Order'), new Serenity.ServiceAttribute('Northwind/Order')] });
	ss.setMetadata($StudentIN_Northwind_OrderGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Order'), new Serenity.IdPropertyAttribute('OrderID'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_OrderDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Order'), new Serenity.ServiceAttribute('Northwind/Order')] });
	ss.setMetadata($StudentIN_Northwind_OrderShippingState, { attr: [new Serenity.EnumKeyAttribute('Northwind.OrderShippingState')] });
	ss.setMetadata($StudentIN_Northwind_PhoneEditor, { attr: [new Serenity.EditorAttribute()], members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'Multiple', type: 16, returnType: Boolean, getter: { name: 'get_Multiple', type: 8, sname: 'get_multiple', returnType: Boolean, params: [] }, setter: { name: 'set_Multiple', type: 8, sname: 'set_multiple', returnType: Object, params: [Boolean] } }] });
	ss.setMetadata($StudentIN_Northwind_ProductDialog, { attr: [new Serenity.IdPropertyAttribute('ProductID'), new Serenity.NamePropertyAttribute('ProductName'), new Serenity.FormKeyAttribute('Northwind.Product'), new Serenity.LocalTextPrefixAttribute('Northwind.Product'), new Serenity.ServiceAttribute('Northwind/Product')] });
	ss.setMetadata($StudentIN_Northwind_ProductGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Product'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('ProductID'), new Serenity.NamePropertyAttribute('ProductName'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_ProductDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Product'), new Serenity.ServiceAttribute('Northwind/Product')] });
	ss.setMetadata($StudentIN_Northwind_RegionDialog, { attr: [new Serenity.IdPropertyAttribute('RegionID'), new Serenity.NamePropertyAttribute('RegionDescription'), new Serenity.FormKeyAttribute('Northwind.Region'), new Serenity.LocalTextPrefixAttribute('Northwind.Region'), new Serenity.ServiceAttribute('Northwind/Region')] });
	ss.setMetadata($StudentIN_Northwind_RegionGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Region'), new Serenity.IdPropertyAttribute('RegionID'), new Serenity.NamePropertyAttribute('RegionDescription'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_RegionDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Region'), new Serenity.ServiceAttribute('Northwind/Region')] });
	ss.setMetadata($StudentIN_Northwind_ShipperDialog, { attr: [new Serenity.IdPropertyAttribute('ShipperID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.FormKeyAttribute('Northwind.Shipper'), new Serenity.LocalTextPrefixAttribute('Northwind.Shipper'), new Serenity.ServiceAttribute('Northwind/Shipper')] });
	ss.setMetadata($StudentIN_Northwind_ShipperGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Shipper'), new Serenity.IdPropertyAttribute('ShipperID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_ShipperDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Shipper'), new Serenity.ServiceAttribute('Northwind/Shipper')] });
	ss.setMetadata($StudentIN_Northwind_SupplierDialog, { attr: [new Serenity.IdPropertyAttribute('SupplierID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.FormKeyAttribute('Northwind.Supplier'), new Serenity.LocalTextPrefixAttribute('Northwind.Supplier'), new Serenity.ServiceAttribute('Northwind/Supplier')] });
	ss.setMetadata($StudentIN_Northwind_SupplierGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Supplier'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('SupplierID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_SupplierDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Supplier'), new Serenity.ServiceAttribute('Northwind/Supplier')] });
	ss.setMetadata($StudentIN_Northwind_TerritoryDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.FormKeyAttribute('Northwind.Territory'), new Serenity.LocalTextPrefixAttribute('Northwind.Territory'), new Serenity.ServiceAttribute('Northwind/Territory')] });
	ss.setMetadata($StudentIN_Northwind_TerritoryGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Territory'), new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.DialogTypeAttribute($StudentIN_Northwind_TerritoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Territory'), new Serenity.ServiceAttribute('Northwind/Territory')] });
	ss.setMetadata($StudentIN_StudentMain_InvoiceInformationDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('InvoicedPersonName'), new Serenity.FormKeyAttribute('StudentMain.InvoiceInformation'), new Serenity.LocalTextPrefixAttribute('StudentMain.InvoiceInformation'), new Serenity.ServiceAttribute('StudentMain/InvoiceInformation')] });
	ss.setMetadata($StudentIN_StudentMain_InvoiceInformationGrid, { attr: [new Serenity.ColumnsKeyAttribute('StudentMain.InvoiceInformation'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('InvoicedPersonName'), new Serenity.DialogTypeAttribute($StudentIN_StudentMain_InvoiceInformationDialog), new Serenity.LocalTextPrefixAttribute('StudentMain.InvoiceInformation'), new Serenity.ServiceAttribute('StudentMain/InvoiceInformation')] });
	ss.setMetadata($StudentIN_StudentMain_PaymentDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('CreatedBy'), new Serenity.FormKeyAttribute('StudentMain.Payment'), new Serenity.LocalTextPrefixAttribute('StudentMain.Payment'), new Serenity.ServiceAttribute('StudentMain/Payment')] });
	ss.setMetadata($StudentIN_StudentMain_PaymentGrid, { attr: [new Serenity.ColumnsKeyAttribute('StudentMain.Payment'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('CreatedBy'), new Serenity.DialogTypeAttribute($StudentIN_StudentMain_PaymentDialog), new Serenity.LocalTextPrefixAttribute('StudentMain.Payment'), new Serenity.ServiceAttribute('StudentMain/Payment')] });
	ss.setMetadata($StudentIN_StudentMain_PaymentInstallmentDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('CreatedBy'), new Serenity.FormKeyAttribute('StudentMain.PaymentInstallment'), new Serenity.LocalTextPrefixAttribute('StudentMain.PaymentInstallment'), new Serenity.ServiceAttribute('StudentMain/PaymentInstallment')] });
	ss.setMetadata($StudentIN_StudentMain_PaymentInstallmentGrid, { attr: [new Serenity.ColumnsKeyAttribute('StudentMain.PaymentInstallment'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('CreatedBy'), new Serenity.DialogTypeAttribute($StudentIN_StudentMain_PaymentInstallmentDialog), new Serenity.LocalTextPrefixAttribute('StudentMain.PaymentInstallment'), new Serenity.ServiceAttribute('StudentMain/PaymentInstallment')] });
	ss.setMetadata($StudentIN_StudentMain_StudentDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FlexifyAttribute(), new Serenity.MaximizableAttribute(), new Serenity.FormKeyAttribute('StudentMain.Student'), new Serenity.LocalTextPrefixAttribute('StudentMain.Student'), new Serenity.ServiceAttribute('StudentMain/Student')] });
	ss.setMetadata($StudentIN_StudentMain_StudentDiscountDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.FormKeyAttribute('StudentMain.StudentDiscount'), new Serenity.LocalTextPrefixAttribute('StudentMain.StudentDiscount'), new Serenity.ServiceAttribute('StudentMain/StudentDiscount')] });
	ss.setMetadata($StudentIN_StudentMain_StudentDiscountGrid, { attr: [new Serenity.ColumnsKeyAttribute('StudentMain.StudentDiscount'), new Serenity.IdPropertyAttribute('Id'), new Serenity.DialogTypeAttribute($StudentIN_StudentMain_StudentDiscountDialog), new Serenity.LocalTextPrefixAttribute('StudentMain.StudentDiscount'), new Serenity.ServiceAttribute('StudentMain/StudentDiscount')] });
	ss.setMetadata($StudentIN_StudentMain_StudentGrid, { attr: [new Serenity.ColumnsKeyAttribute('StudentMain.Student'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($StudentIN_StudentMain_StudentDialog), new Serenity.LocalTextPrefixAttribute('StudentMain.Student'), new Serenity.ServiceAttribute('StudentMain/Student')] });
	ss.setMetadata($StudentIN_StudentMain_SubInvoiceInformationGrid, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_StudentMain_SubPaymentGrid, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_StudentMain_SubPaymentInstallmentGrid, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.EditorAttribute()] });
	ss.setMetadata($StudentIN_StudentMain_SubStudentDiscountGrid, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.EditorAttribute()] });
	(function() {
		Q$Config.rootNamespaces.push('StudentIN');
	})();
})();
