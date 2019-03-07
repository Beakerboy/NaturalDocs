NDSummary.OnToolTipsLoaded("CSharpClass:CodeClear.NaturalDocs.Engine.Instance",{3962:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3962\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;Instance</div></div></div><div class=\"TTSummary\">A class for managing the overall Natural Docs engine.</div></div>",3963:"<div class=\"NDToolTip TInformation LCSharp\"><div class=\"TTSummary\">It\'s critical for module code to understand its place in the initialization order so it doesn\'t call anything later than itself in its Start() function.&nbsp; This also serves to document exactly why the order is the way it is.</div></div>",3964:"<div class=\"NDToolTip TFile LCSharp\"><div class=\"TTSummary\">This is a file with no particular content.&nbsp; It is created when the engine instance starts and deleted if it exits gracefully.&nbsp; Therefore the existence of this file on startup means the engine did not exit gracefully last time, possibly because of a crash or exception.&nbsp; This automatically causes &lt;Config.Manager.RebuildEverything&gt; to be set the next time it starts.</div></div>",3966:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3966\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Instance (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Config.</td><td class=\"PType\">Manager&nbsp;</td><td class=\"PName\">configManager&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PModifierQualifier first\">CommentTypes.</td><td class=\"PType\">Manager&nbsp;</td><td class=\"PName\">commentTypesManager&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PModifierQualifier first\">Languages.</td><td class=\"PType\">Manager&nbsp;</td><td class=\"PName\">languagesManager&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PModifierQualifier first\">Comments.</td><td class=\"PType\">Manager&nbsp;</td><td class=\"PName\">commentsManager&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PModifierQualifier first\">Links.</td><td class=\"PType\">Manager&nbsp;</td><td class=\"PName\">linksManager&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PModifierQualifier first\">CodeDB.</td><td class=\"PType\">Manager&nbsp;</td><td class=\"PName\">codeDBManager&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PModifierQualifier first\">Output.</td><td class=\"PType\">Manager&nbsp;</td><td class=\"PName\">outputManager&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PModifierQualifier first\">SearchIndex.</td><td class=\"PType\">Manager&nbsp;</td><td class=\"PName\">searchIndexManager&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PModifierQualifier first\">Files.</td><td class=\"PType\">Manager&nbsp;</td><td class=\"PName\">filesManager&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PModifierQualifier first\">Files.</td><td class=\"PType\">Processor&nbsp;</td><td class=\"PName\">fileProcessor&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates the instance so you can access modules like Config.&nbsp; The modules will not be started by this function.</div></div>",3967:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3967\" class=\"NDPrototype NoParameterForm\">~Instance ()</div></div>",3968:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3968\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Dispose (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">graceful</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Shuts down the engine instance.&nbsp; Pass to it whether it was a graceful shutdown, as opposed to closing because of an error or exception.</div></div>",3969:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3969\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> IDisposable.Dispose ()</div></div>",3970:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3970\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected void</span> Dispose (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">graceful,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">strictRulesApply</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Shuts down the engine instance.&nbsp; Pass to it whether it was a graceful shutdown, as opposed to closing because of an error or exception.</div></div>",3971:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3971\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Start (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Errors.</td><td class=\"PType\">ErrorList&nbsp;</td><td class=\"PName last\">errors,</td></tr><tr><td class=\"PModifierQualifier first\">Config.</td><td class=\"PType\">ProjectConfig&nbsp;</td><td class=\"PName last\">commandLineConfig</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to start the engine instance.&nbsp; Returns whether it was successful, and if it wasn\'t, puts any errors that prevented it on the list.&nbsp; If you wish to try to start it again, call Dispose() and &lt;Create()&gt; first.</div></div>",3972:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3972\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Cleanup (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelDelegate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Assuming everything is up to date, has the engine modules clean up their internal data.&nbsp; A delegate can be passed to cancel the process early.</div></div>",3973:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3973\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public string</span> GetCrashInformation (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Exception&nbsp;</td><td class=\"PName last\">exception</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds crash information for the passed exception.&nbsp; It is safe to use even though the program is in an unstable state.</div></div>",3974:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3974\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Path BuildCrashReport (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Exception&nbsp;</td><td class=\"PName last\">e</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to build a crash report for the passed exception.&nbsp; If it succeeds it will return the path to the file, otherwise it will return null.&nbsp; It is safe to use even though the program is in an unstable state.&nbsp; It will simply eat any exceptions it generates trying to create the report and return null instead.&nbsp; If it\'s not able to generate the report you should display GetCrashInformation() instead.</div></div>",3976:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3976\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddStartupWatcher (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IStartupWatcher&nbsp;</td><td class=\"PName last\">watcher</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds an object that wants to be aware of events that occur during initialization.&nbsp; Call after &lt;Create()&gt; but before Start().</div></div>",3977:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3977\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> StartPossiblyLongOperation (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">operationName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Called <b>by module code only</b> to signify that a possibly long operation is about to begin.&nbsp; The operation name is arbitrary but should be documented in IStartupWatcher.OnStartPossiblyLongOperation.&nbsp; Every call should be matched with a EndPossiblyLongOperation() call, and it is up to the module code to make sure the calls are properly paired and non-overlapping.</div></div>",3978:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3978\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public void</span> EndPossiblyLongOperation ()</div><div class=\"TTSummary\">Called <b>by module code only</b> to signify that the possibly long operation previously recorded with StartPossiblyLongOperation() has concluded.</div></div>",3980:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype3980\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public const string</span> VersionString</div><div class=\"TTSummary\">The current version of the Natural Docs engine as a string.</div></div>",3981:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3981\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public static</span> Version Version { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The current version of the Natural Docs engine.</div></div>",3982:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3982\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Config.Manager Config { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the Config.Manager associated with this instance.</div></div>",3983:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3983\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> CommentTypes.Manager CommentTypes { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the CommentTypes.Manager associated with this instance.</div></div>",3984:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3984\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Languages.Manager Languages { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the Languages.Manager associated with this instance.</div></div>",3985:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3985\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Comments.Manager Comments { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the Comments.Manager associated with this instance.</div></div>",3986:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3986\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Links.Manager Links { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the Links.Manager associated with this instance.</div></div>",3987:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3987\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> CodeDB.Manager CodeDB { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the CodeDB.Manager associated with this instance.</div></div>",3988:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3988\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> SearchIndex.Manager SearchIndex { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the SearchIndex.Manager associated with this instance.</div></div>",3989:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3989\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Output.Manager Output { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the Output.Manager associated with this instance.</div></div>",3990:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3990\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Files.Processor FileProcessor { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the Files.Processor associated with this instance.</div></div>",3991:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3991\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Files.Manager Files { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the Files.Manager associated with this instance.</div></div>",3993:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3993\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> List&lt;IStartupWatcher&gt; startupWatchers</div><div class=\"TTSummary\">A list of all the objects that want to observe the engine\'s initialization.</div></div>",3994:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3994\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Config.Manager config</div></div>",3995:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3995\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> CommentTypes.Manager commentTypes</div></div>",3996:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3996\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Languages.Manager languages</div></div>",3997:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3997\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Comments.Manager comments</div></div>",3998:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3998\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Links.Manager links</div></div>",3999:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3999\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> CodeDB.Manager codeDB</div></div>",4000:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4000\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> SearchIndex.Manager searchIndex</div></div>",4001:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4001\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Output.Manager output</div></div>",4002:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4002\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Files.Manager files</div></div>",4003:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4003\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Files.Processor fileProcessor</div></div>"});