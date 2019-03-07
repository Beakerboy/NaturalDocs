NDSummary.OnToolTipsLoaded("CSharpClass:CodeClear.NaturalDocs.Engine.SearchIndex.IChangeWatcher",{3087:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3087\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;SearchIndex.</span>&#8203;IChangeWatcher</div></div></div><div class=\"TTSummary\">An interface for any class that wants to watch for changes in the search index.</div></div>",3089:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3089\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> OnAddPrefix (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">prefix,</td></tr><tr><td class=\"PModifierQualifier first\">CodeDB.</td><td class=\"PType\">EventAccessor&nbsp;</td><td class=\"PName last\">eventAccessor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Called after a prefix is used in the index for the first time.&nbsp; Note that you will hold a lock on both CodeDB.Manager and SearchIndex.Manager when this is called.</div></div>",3090:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3090\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> OnUpdatePrefix (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">prefix,</td></tr><tr><td class=\"PModifierQualifier first\">CodeDB.</td><td class=\"PType\">EventAccessor&nbsp;</td><td class=\"PName last\">eventAccessor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Called after a change was made that affected an existing prefix.&nbsp; Note that you will hold a lock on both CodeDB.Manager and SearchIndex.Manager when this is called.</div></div>",3091:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3091\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> OnDeletePrefix (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">prefix,</td></tr><tr><td class=\"PModifierQualifier first\">CodeDB.</td><td class=\"PType\">EventAccessor&nbsp;</td><td class=\"PName last\">eventAccessor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Called before the last reference to a prefix was removed from the index.&nbsp; Note that you will hold a lock on both CodeDB.Manager and SearchIndex.Manager when this is called.</div></div>"});