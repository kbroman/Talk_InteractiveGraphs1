#!/usr/bin/perl
# create version without the notes (by commenting out link with "kbroman_presentation.css")

$ifile = "index.html";
$ofile = "index_presentation.html";
open(IN, $ifile) or die("Cannot read from $ifile");
open(OUT, ">$ofile") or die("Cannot write to $ofile");

while($line = <IN>) {
    chomp($line);
    if($line =~ /kbroman_presentation/) {
        $line =~ s/\/\* //;
        $line =~ s/ \*\///;
    }
    print OUT "$line\n";
}

