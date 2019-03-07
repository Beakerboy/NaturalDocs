NDContentPage.OnToolTipsLoaded({226:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype226\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Collections.</span>&#8203;StringTable&#8203;<span class=\"TemplateSignature\">&lt;ObjectType&gt;</span></div></div></div><div class=\"TTSummary\">A generic lookup table for mapping strings to other objects.&nbsp; This is preferable to a Dictionary&lt;string, object&gt; class because:</div></div>",241:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype241\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Collections.</span>&#8203;StringSet</div></div></div><div class=\"TTSummary\">A general lookup table for tracking the existence of strings in a set.&nbsp; This is preferable to a HashSet class because</div></div>",263:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype263\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Collections.</span>&#8203;SortedStringTable&#8203;<span class=\"TemplateSignature\">&lt;ObjectType&gt;</span></div></div></div><div class=\"TTSummary\">A generic sorted lookup table for mapping strings to other objects.&nbsp; This is preferable to a SortedDictionary&lt;string, object&gt; class because</div></div>",282:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype282\" class=\"NDPrototype NoParameterForm\"><div class=\"PPrePrototypeLine\"><span class=\"SHMetadata\">[Flags]</span></div><span class=\"SHKeyword\">public enum</span> KeySettings : <span class=\"SHKeyword\">byte</span></div><div class=\"TTSummary\">The way to handle keys in collections like StringSet.&nbsp; These are flags and may be combined.</div></div>",364:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype364\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;CommentTypes.</span>&#8203;Manager</div></div></div><div class=\"TTSummary\">A module to handle Comments.txt and all the comment type settings within Natural Docs.</div></div>",1160:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1160\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Errors.</span>&#8203;ErrorList</div></div></div><div class=\"TTSummary\">A list of Error objects.</div></div>",1200:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1200\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Config.</span>&#8203;Manager</div></div></div><div class=\"TTSummary\">A class to manage the engine\'s configuration.</div></div>",1493:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1493\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;IDObjects.</span>&#8203;Manager&#8203;<span class=\"TemplateSignature\">&lt;IDObjectType&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> IDObjectType: IDObjects.Base</div></div></div><div class=\"TTSummary\">A class for managing objects that have to be referenced either by a string ID or a unique numeric ID.&nbsp; This is a generic class.&nbsp; Set the type to be an object derived from IDObjects.Base.</div></div>",1630:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1630\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Languages.</span>&#8203;ShebangStringComparer</div></div></div><div class=\"TTSummary\">An implementation of IComparer that incorporates string length.&nbsp; Longer strings are less than shorter strings, and if two strings are equal lengths it does a regular string comparison.&nbsp; This is done so when you iterate through a Collections.SortedStringTable of shebang strings, the longer strings come first.&nbsp; This is important because someone could conceivably define one language with shebang string &quot;php5&quot; and another with just &quot;php&quot;.&nbsp; We want the longer one to be tested against first.</div></div>",1679:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1679\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Start (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Errors.</td><td class=\"PType\">ErrorList&nbsp;</td><td class=\"PName last\">errorList</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Loads and combines the two versions of Languages.txt, returning whether it was successful.&nbsp; If there were any errors they will be added to errorList.</div></div>",1689:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1689\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> IDObjects.Manager&lt;Language&gt; languages</div><div class=\"TTSummary\">Manages all the Languages by their case-insensitive name or ID number.</div></div>",1746:"<div class=\"NDToolTip TFile LCSharp\"><div class=\"TTSummary\">The configuration file that defines or overrides the language definitions for Natural Docs.&nbsp; One version sits in Natural Docs\' configuration folder, and another in the project configuration folder to add languages or override their behavior.</div></div>",1786:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1786\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Languages.</span>&#8203;Language</div></div></div><div class=\"TTSummary\">A class encapsulating information about a language.&nbsp; This differs from ConfigFileLanguage in that its meant to represent the final combined settings of a language rather than its entry in a config file.&nbsp; For example, this class doesn\'t store the language\'s extensions or shebang strings.</div></div>",1789:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype1789\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public enum</span> LanguageType : <span class=\"SHKeyword\">byte</span></div><div class=\"TTSummary\">The type of language or file this is.</div></div>",1863:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1863\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Languages.</span>&#8203;ConfigFileLanguage</div></div></div><div class=\"TTSummary\">A class encapsulating information about a language as it appears in Languages.txt.&nbsp; This differs from Language in that its meant to represent its entry in a config file rather than the final combined settings of a language.</div></div>",3786:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3786\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;Path</div></div></div><div class=\"TTSummary\">A struct encapsulating a file path string.&nbsp; This is needed because Natural Docs needs to be able to handle all three path formats at once, not just the local format.&nbsp; Natural Docs on Windows may be reading a configuration file from Natural Docs on Linux and vice versa.</div></div>",3865:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3865\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public abstract</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;Module</div></div></div><div class=\"TTSummary\">A base class for a core part of Engine.Instance.</div></div>",3962:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3962\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;Instance</div></div></div><div class=\"TTSummary\">A class for managing the overall Natural Docs engine.</div></div>",3971:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3971\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Start (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Errors.</td><td class=\"PType\">ErrorList&nbsp;</td><td class=\"PName last\">errors,</td></tr><tr><td class=\"PModifierQualifier first\">Config.</td><td class=\"PType\">ProjectConfig&nbsp;</td><td class=\"PName last\">commandLineConfig</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to start the engine instance.&nbsp; Returns whether it was successful, and if it wasn\'t, puts any errors that prevented it on the list.&nbsp; If you wish to try to start it again, call Dispose() and &lt;Create()&gt; first.</div></div>"});