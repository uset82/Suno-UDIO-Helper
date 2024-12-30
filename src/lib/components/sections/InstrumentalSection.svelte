<section class="section">
	<h3>Instrumental Features</h3>
	
	<div class="subsection">
		<h4>Instrumental Switch</h4>
		<p>New in v3, the Instrumental switch deletes any lyrics and closes the Lyric Prompt panel. However, this doesn't guarantee you won't hear hallucinations. If necessary, take these additional measures when prompting Suno:</p>
		<ul>
			<li>Switch off Instrumental</li>
			<li>Add 'instrumental' in the style prompt</li>
			<li>Add [Instrumental] to the Lyrics prompt as a metatag</li>
		</ul>
	</div>

	<div class="subsection">
		<h4>Prompting for Instrumental 'Songs' with Sections</h4>
		<p>Instrumentals can use a verse-chorus song structure without lyrics. Use style metatags to describe the music or emotional effect:</p>
		<pre>[Dramatic Verse] [Melodic Chorus]</pre>
		<p>To force space between sections, add text that can't be sung, like unicode characters:</p>
		<pre>[Verse] ┳┻┳┻┳┻┳┻┳┻┳┻ ┻┳┻┳┻┳┻┳┻┳┻┳</pre>
	</div>

	<div class="subsection">
		<h4>Prompting for Instrumental Breaks and Solos</h4>
		<p>Use the [Break] tag to trigger a short pause in the melody where the bass and percussion play. This can interrupt the singing pattern. Instrument solos are also a kind of Break:</p>
		<pre>[Bass Drop] [Percussion Breakdown] [Melodic Flute Interlude] [Guitar solo]</pre>
		<p>Follow with the chorus or a new verse in the same clip to keep the voice 'warm'. If the voice is silent for too long, Suno may 'forget' how that voice should sound and create a new one to continue the song.</p>
	</div>
</section>

<style>
	.section {
		margin: 2rem 0;
	}
	
	h3, h4 {
		color: #555;
	}
	
	h3 {
		font-size: 1.25rem;
		margin-bottom: 1.5rem;
	}
	
	h4 {
		font-size: 1.1rem;
		margin: 1rem 0;
	}
	
	.subsection {
		margin: 1.5rem 0;
	}
	
	ul {
		list-style-type: disc;
		margin-left: 1.5rem;
	}
</style>