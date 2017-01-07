(DEPRECATED)

<h1>jQuery: labelcheck</h1>

<p>Hate to <strong>hunt and click these small checkboxes/radio</strong> buttons ?</p>

<p>hunt no more...</p>

<h3>Examples</h3>

<p>Place one label+checkbox in one 'row/container'
<code>
$('.row').labelcheck(); <br>
$('.row').labelcheck({'click':function(){alert('Checkbox clicked or label clicked')}}); <br>
$('tr').labelcheck({'label_selector':'.label'}); <br>
</code></p>

<p>testes in IE6+FF (should work everywhere, since it uses only jQuery standard controls)</p>

<h3>Other ways to get it working</h3>

Surrounding the checkboxes

<p>Works for FF but not IE6
<code>
&lt;label&gt;&lt;input type="checkbox"/&gt;&lt;/label&gt;
</code>
if you are using this style, add this to make it work in IE6
<code>
&lt;!--[if IE 6]&gt;
  &lt;script type="text/javascript" src="jquery.labelcheck.js"&gt;&lt;/script&gt;
  $('#form_with_labels label').labelcheck();
&lt;![endif]--&gt;
</code></p>

Scaling the checkboxes

<p>Looks good on PC, but renders as one large oval on Mac
<code>
&lt;input type="checkbox" style="width:40px"/&gt;
</code></p>

<h3>see it working @</h3>

<p>please submit your site if you use the plugin, thanks.</p>

<ul>
<li><a href="http://www.berlinale-talentcampus.de/campus/news/board">berlinale-talentcampus.de</a></li>
</ul>
