
(function() {
	tinymce.create('tinymce.plugins.EmojiPlugin', {
		init : function(ed, url) {
			ed.addCommand('mceEmoji', function() {
				ed.windowManager.open({
					file : url + '/emoji.html?asdad',
					width : 600,
					height : 400,
					inline : 1
				}, {
					plugin_url : url
				});
			});

			ed.addButton('emoji', {
				title : 'Emoji',
				cmd : 'mceEmoji',
				image : url + '/img/icon.png'
			});

			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('emoji', n.nodeName == 'IMG');
			});

		}
	});

    tinymce.PluginManager.add('emoji', tinymce.plugins.EmojiPlugin);
})();
