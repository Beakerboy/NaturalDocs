NDSummary.OnToolTipsLoaded("CSharpClass:CodeClear.NaturalDocs.Engine.Output.Components.JSMenuData.ContainerExtraData",{2532:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2532\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">private</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Output.&#8203;Components.&#8203;JSMenuData.</span>&#8203;ContainerExtraData</div></div></div><div class=\"TTSummary\">A class used to store extra information needed by JSMenuData in each menu entry via the ExtraData property.</div></div>",2534:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2534\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ContainerExtraData (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MenuEntries.Base.</td><td class=\"PType\">Container&nbsp;</td><td class=\"PName last\">menuEntry</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",2535:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2535\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> GenerateJSON (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Builders.</td><td class=\"PType\">HTML&nbsp;</td><td class=\"PName last\">htmlBuilder,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">JSMenuData&nbsp;</td><td class=\"PName last\">menu</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",2537:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2537\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> StartsNewDataFile { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Whether this container starts a new data file.&nbsp; This property is read-only.&nbsp; If you need to change it, set DataFileName instead.</div></div>",2538:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2538\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> DataFileName { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">If this container starts a new data file this will be its file name, such as &quot;files2.js&quot; or &quot;classes.js&quot;.&nbsp; It will not include a path.&nbsp; If this container doesn\'t start a new data file, this will be null.</div></div>",2539:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2539\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> JSONBeforeMembers { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">After GenerateJSON() is called, this will be the JSON output of this entry up to the point where its members would appear.</div></div>",2540:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2540\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> JSONAfterMembers { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">After GenerateJSON() is called, this will be the JSON output of this entry after the point where its members would appear.</div></div>",2541:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2541\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> JSONLengthOfMembers { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The calculated total JSON length of all members stored directly in this container.&nbsp; It does NOT recurse into deeper containers.</div></div>",2542:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2542\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> HashPath { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The hash path of the container, or null if none.&nbsp; This will only be available after GenerateJSON() is called.</div></div>",2544:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2544\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> MenuEntries.Base.Container menuEntry</div><div class=\"TTSummary\">The menu entry associated with this object.</div></div>",2545:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2545\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> jsonBeforeMembers</div><div class=\"TTSummary\">The generated JSON for this entry, up to the point where its members would be inserted.</div></div>",2546:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2546\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> jsonAfterMembers</div><div class=\"TTSummary\">The generated JSON for this entry, after the point where its members would be inserted.</div></div>",2547:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2547\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected int</span> jsonLengthOfMembers</div><div class=\"TTSummary\">The calculated total JSON length of all members directly stored in this container, or -1 if it hasn\'t been calculated yet.&nbsp; It does NOT recurse into deeper levels.</div></div>",2548:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2548\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> dataFileName</div><div class=\"TTSummary\">If this container starts a new data file this will be its file name, such as &quot;files2.js&quot; or &quot;classes.js&quot;.&nbsp; It will not include a path.&nbsp; If this container doesn\'t start a new data file, this will be null.</div></div>",2549:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2549\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> hashPath</div><div class=\"TTSummary\">The hash path of the container, or null if none.&nbsp; This will only be available after GenerateJSON() is called.</div></div>"});