#!/usr/bin/env perl
#
# http://daringfireball.net/2007/03/javascript_bookmarklet_builder

use strict;
use warnings;
use URI::Escape qw(uri_escape_utf8);
use open  IO  => ":utf8",       # UTF8 by default
          ":std";               # Apply to STDIN/STDOUT/STDERR

my $source_code = do { local $/; <> };

# Zap the first line if there's already a bookmarklet comment:
$source_code =~ s{^// ?javascript:.+\n}{};

my $bookmarklet = $source_code;
for ($bookmarklet) {
    s{(^\s*//.+\n)}{}gm;        # Kill commented lines
    s{^\s*/\*.+?\*/\n?}{}gms;   # Kill block comments
    s{\t}{ }gm;                 # Tabs to spaces
    s{[ ]{2,}}{ }gm;            # Space runs to one space
    s{^\s+}{}gm;                # Kill line-leading whitespace
    s{\s+$}{}gm;                # Kill line-ending whitespace
    s{\n}{}gm;                  # Kill newlines
}

# Escape single- and double-quotes, spaces, control chars, unicode:
$bookmarklet = "javascript:" .
    uri_escape_utf8($bookmarklet, qq(%'" \x00-\x1f\x7f-\xff));

print "// $bookmarklet\n" . $source_code;


print $bookmarklet;
