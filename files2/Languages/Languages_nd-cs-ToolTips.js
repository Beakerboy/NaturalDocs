NDContentPage.OnToolTipsLoaded({226:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype226\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Collections.</span>&#8203;StringTable&#8203;<span class=\"TemplateSignature\">&lt;ObjectType&gt;</span></div></div></div><div class=\"TTSummary\">A generic lookup table for mapping strings to other objects.&nbsp; This is preferable to a Dictionary&lt;string, object&gt; class because:</div></div>",241:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype241\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Collections.</span>&#8203;StringSet</div></div></div><div class=\"TTSummary\">A general lookup table for tracking the existence of strings in a set.&nbsp; This is preferable to a HashSet class because</div></div>",263:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype263\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Collections.</span>&#8203;SortedStringTable&#8203;<span class=\"TemplateSignature\">&lt;ObjectType&gt;</span></div></div></div><div class=\"TTSummary\">A generic sorted lookup table for mapping strings to other objects.&nbsp; This is preferable to a SortedDictionary&lt;string, object&gt; class because</div></div>",1493:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1493\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;IDObjects.</span>&#8203;Manager&#8203;<span class=\"TemplateSignature\">&lt;IDObjectType&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> IDObjectType: IDObjects.Base</div></div></div><div class=\"TTSummary\">A class for managing objects that have to be referenced either by a string ID or a unique numeric ID.&nbsp; This is a generic class.&nbsp; Set the type to be an object derived from IDObjects.Base.</div></div>",1670:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1670\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Languages.</span>&#8203;Manager</div></div></div><div class=\"TTSummary\">A module to handle Languages.txt and all the language parsers within Natural Docs.</div></div>",1746:"<div class=\"NDToolTip TFile LCSharp\"><div class=\"TTSummary\">The configuration file that defines or overrides the language definitions for Natural Docs.&nbsp; One version sits in Natural Docs\' configuration folder, and another in the project configuration folder to add languages or override their behavior.</div></div>",1775:"<div class=\"NDToolTip TFile LCSharp\"><div class=\"TTSummary\">A binary file which stores the combined results of the two versions of Languages.txt as of the last run, as well as storing the IDs of each type so they maintain their consistency between runs.</div></div>",1779:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1779\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Load (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Path&nbsp;</td><td class=\"PName last\">filename,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">List&lt;Language&gt;&nbsp;</td><td class=\"PName last\">languages,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">List&lt;KeyValuePair&lt;<span class=\"SHKeyword\">string</span>, <span class=\"SHKeyword\">int</span>&gt;&gt;&nbsp;</td><td class=\"PName last\">aliases,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">List&lt;KeyValuePair&lt;<span class=\"SHKeyword\">string</span>, <span class=\"SHKeyword\">int</span>&gt;&gt;&nbsp;</td><td class=\"PName last\">extensions,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">List&lt;KeyValuePair&lt;<span class=\"SHKeyword\">string</span>, <span class=\"SHKeyword\">int</span>&gt;&gt;&nbsp;</td><td class=\"PName last\">shebangStrings,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">List&lt;<span class=\"SHKeyword\">string</span>&gt;&nbsp;</td><td class=\"PName last\">ignoredExtensions</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Loads the information in Languages.nd, which is the computed language settings from the last time Natural Docs was run.&nbsp; Returns whether it was successful.&nbsp; If not all the out parameters will still return objects, they will just be empty.</div></div>",1782:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1782\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Save (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Path&nbsp;</td><td class=\"PName last\">filename,</td></tr><tr><td class=\"PModifierQualifier first\">IDObjects.</td><td class=\"PType\">Manager&lt;Language&gt;&nbsp;</td><td class=\"PName last\">languages,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">StringTable&lt;Language&gt;&nbsp;</td><td class=\"PName last\">aliases,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">StringTable&lt;Language&gt;&nbsp;</td><td class=\"PName last\">extensions,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">SortedStringTable&lt;Language&gt;&nbsp;</td><td class=\"PName last\">shebangStrings,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">StringSet&nbsp;</td><td class=\"PName last\">ignoredExtensions</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Saves the current computed languages into Languages.nd.&nbsp; Throws an exception if unsuccessful.</div></div>",1786:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1786\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Languages.</span>&#8203;Language</div></div></div><div class=\"TTSummary\">A class encapsulating information about a language.&nbsp; This differs from ConfigFileLanguage in that its meant to represent the final combined settings of a language rather than its entry in a config file.&nbsp; For example, this class doesn\'t store the language\'s extensions or shebang strings.</div></div>",3786:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3786\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;Path</div></div></div><div class=\"TTSummary\">A struct encapsulating a file path string.&nbsp; This is needed because Natural Docs needs to be able to handle all three path formats at once, not just the local format.&nbsp; Natural Docs on Windows may be reading a configuration file from Natural Docs on Linux and vice versa.</div></div>",4042:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4042\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;BinaryFile</div></div></div><div class=\"TTSummary\">A class to handle reading standard Natural Docs binary configuration files.&nbsp; This class does NOT support binary files prior to version 2.0.&nbsp; Supporting those files isn\'t really necessary due to the vast changes appearing with 2.0.</div></div>"});