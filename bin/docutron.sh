#!/bin/bash	
	
_docutron_main() {
	for arg in ${*} ; do
		local html=$(basename ${arg} | sed 's,\.md$,.html,' )
		echo "Creating ${html} from ${arg}:"
		_docutron_make ${arg} > ${html}
		echo "Created ${html} from ${arg}."
	done
}

_docutron_make() {
	local md=${1}
	if [ ! -f ${md} ] ; then
		echo "${md} can pound sand!"
		return 1
	fi

	local bit=$(basename ${md} | cut -f1 -d.)

	_docutron_header ${bit}
	_docutron_pandoc ${md} | _docutron_strip
	_docutron_footer ${bit}
}

_docutron_pandoc() {
	pandoc ${1} -f markdown+smart --to=html5 -o - -s 2>/dev/null
}

_docutron_strip() {
	awk '/^<\/body>/ {ON=0} ON {print} /^<body>/ {ON=1}'
}

_docutron_header() {
	local bit=${1}
cat << HTML
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<HTML xmlns="http://www.w3.org/1999/xhtml">
	<HEAD>
		<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
		<meta content="utf-8" http-equiv="encoding">

HTML
cat dox/bits/lbl-comment.txt

cat << HTML
		<TITLE>lbl ${bit}</TITLE>

		<script type="text/javascript" src="js/lbl-${bit}.js"></script>
		<script type="text/javascript">  
			window.addEventListener('load', () => lbl())
		</script>
		<link rel="stylesheet" href="css/page.css"/> 
	</HEAD>
	<BODY>
		<div class="lbl">
HTML
}

_docutron_footer() {
	local bit=${1}
cat << HTML
		</div>
		<div class="right_down">
			<a href="https://x.com/LooseBitLabs" target="_">
				<img class="x" src="pix/icon-x.png"/>
			</a>
			<span id="lbl"><a href="/" rel="prev">@LooseBitLabs</a></span>
			<a href="https://www.youtube.com/@LooseBitLabs" target="_">
				<img class="y" src="pix/icon-yt.png"/>
			</a>
		</div>
		<div class="preview"></div>
	</BODY>
</HTML>
HTML
}


_docutron_main ${*}
