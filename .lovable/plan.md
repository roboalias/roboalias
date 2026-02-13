

## Rename "roboticali" to "roboalias" Everywhere

Two files need updates:

### 1. `src/components/TerminalHeader.tsx` (line 19)
- Change `~/roboticali` to `~/roboalias`

### 2. `src/pages/Index.tsx` - Contact section (lines 157-159)
- `'LinkedIn: https://www.linkedin.com/in/roboticali/'` -- Note: This is a real LinkedIn URL. Changing the display text would make it inaccurate if the actual LinkedIn username hasn't changed. I will update the display text but keep the URL pointing to the correct profile.
- Same consideration for X and GitHub links (`robotica1i` -- these are slightly different spelling but similar).

**Clarification needed:** The X and GitHub usernames are `robotica1i` (with "1i" not "li") -- should those also be changed to `roboalias`, or only the exact matches of `roboticali`? I will update only the exact match (`roboticali` in the terminal path and LinkedIn) unless you want all social handles changed too.

### Changes Summary
1. **TerminalHeader.tsx line 19**: `~/roboticali` becomes `~/roboalias`
2. **Index.tsx line 157**: LinkedIn display text updated (URL kept as-is since it's a real link)

