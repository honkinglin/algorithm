import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Constants for directories relative to the current script
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = path.resolve(__dirname, '../docs');
const ZH_DIR = path.join(DOCS_DIR, 'zh');
const EN_DIR = path.join(DOCS_DIR, 'en');
const VITEPRESS_DIR = path.join(DOCS_DIR, '.vitepress');
const ZH_TS_PATH = path.join(VITEPRESS_DIR, 'zh.mts');
const EN_TS_PATH = path.join(VITEPRESS_DIR, 'en.mts');

// Template content for the Markdown files
const templateBase = (title, num, linkLang) => `# ${num}. ${title} <Badge type="warning" text="Medium" />

> Example 1:  
Input: 
Output: 

## Approach
**Input:** 

**Output:** 

## Implementation

::: code-group

\`\`\`python
class Solution:
    pass
\`\`\`

\`\`\`javascript
/**
 * @param {} 
 * @return {}
 */
var solution = function() {

};
\`\`\`

:::

## Complexity Analysis

- Time Complexity: \`O()\`
- Space Complexity: \`O()\`

## Links

[${num}. ${enTitle} (English)](https://leetcode.com/problems/)

[${num}. ${zhTitle} (Chinese)](https://leetcode.cn/problems/)
`;

// Make enTitle and zhTitle globally available for the template
let globalZhTitle = '';
let globalEnTitle = '';

function createMarkdownFile(langDir, title, moduleName, problemNumber) {
    const targetDir = path.join(langDir, moduleName);
    
    // Create the module directory if it doesn't already exist
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
        console.log(`Created directory: ${targetDir}`);
    }

    const filePath = path.join(targetDir, `${problemNumber}.md`);
    if (fs.existsSync(filePath)) {
        console.warn(`File already exists: ${filePath}`);
    } else {
        const isEnglish = langDir === EN_DIR;
        const linkLang = isEnglish ? 'en' : 'zh';
        
        // Re-construct the template to use the correct titles
        const template = `# ${problemNumber}. ${title} <Badge type="warning" text="Medium" />

> Example 1:  
Input: 
Output: 

## Approach
**Input:** 

**Output:** 

## Implementation

::: code-group

\`\`\`python
class Solution:
    pass
\`\`\`

\`\`\`javascript
/**
 * @param {} 
 * @return {}
 */
var solution = function() {

};
\`\`\`

:::

## Complexity Analysis

- Time Complexity: \`O()\`
- Space Complexity: \`O()\`

## Links

[${problemNumber}. ${globalEnTitle} (English)](https://leetcode.com/problems/)

[${problemNumber}. ${globalZhTitle} (Chinese)](https://leetcode.cn/problems/)
`;

        fs.writeFileSync(filePath, template, 'utf-8');
        console.log(`Created markdown file: ${filePath}`);
    }
}

function updateSidebar(filePath, linkPrefix, displayTitle, tsLang, moduleName, problemNumber) {
    if (!fs.existsSync(filePath)) {
        console.error(`Sidebar config not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Construct the link path to match in the sidebar
    // Typically the structure looks like this: { text: 'Some Header', link: '/module/index.md' }, or items: [ { text: '...', link: '/module/123.md' } ]
    // The English sidebar will have link: '/en/module/...', the Chinese one link: '/module/...'
    
    const searchString = `link: '${linkPrefix}${moduleName}/`;
    
    // Find the last occurrence of an item inside the specific module to append right after it
    let moduleIndex = content.lastIndexOf(searchString);

    if (moduleIndex !== -1) {
        // Find the end of that specific object line, e.g., ' },' or ' }'
        let endOfLineMatch = content.indexOf('}', moduleIndex);
        if (endOfLineMatch !== -1) {
            const fullLink = `${linkPrefix}${moduleName}/${problemNumber}.md`;
            const newLine = `          { text: '${problemNumber}. ${displayTitle}', link: '${fullLink}' },\n`;
            
            // Insert the new line right after the found item (including the closing bracket and possible comma/newline)
            let insertionPoint = content.indexOf('\n', endOfLineMatch) + 1;
            
            content = content.slice(0, insertionPoint) + newLine + content.slice(insertionPoint);
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Successfully added to sidebar in ${tsLang}.mts`);
            return;
        }
    } 

    console.warn(`Module '${moduleName}' not found or easily parsable in ${tsLang}.mts. You may need to add it manually.`);
}

async function main() {
    let moduleName, problemNumber, zhTitle, enTitle;

    // Check if arguments were passed
    const args = process.argv.slice(2);
    if (args.length >= 4) {
        [moduleName, problemNumber, zhTitle, enTitle] = args;
    } else {
        const rl = readline.createInterface({ input, output });
        console.log('--- VitePress 算法刷题模板生成器 ---\n');
        
        // Get available modules from docs/zh
        let availableModules = [];
        if (fs.existsSync(ZH_DIR)) {
            availableModules = fs.readdirSync(ZH_DIR, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .map(dirent => dirent.name)
                .filter(name => name !== 'assets' && name !== 'public');
        }

        console.log('可用模块 (输入序号选择，或直接输入新模块名称创建):');
        availableModules.forEach((mod, index) => {
            console.log(`  ${index + 1}. ${mod}`);
        });

        const moduleChoice = await rl.question('\n选择模块序号/输入新模块名: ');
        const choiceIndex = parseInt(moduleChoice, 10) - 1;
        
        if (!isNaN(choiceIndex) && choiceIndex >= 0 && choiceIndex < availableModules.length) {
            moduleName = availableModules[choiceIndex];
            console.log(`> 已选择模块: ${moduleName}`);
        } else if (moduleChoice.trim() !== '') {
            moduleName = moduleChoice.trim();
            console.log(`> 将创建新模块: ${moduleName}`);
        } else {
            console.error('模块选择不能为空。退出。');
            process.exit(1);
        }

        problemNumber = await rl.question('\n请输入题目序号 (如: 15): ');
        if (!problemNumber.trim()) {
            console.error('题目序号不能为空。退出。');
            process.exit(1);
        }

        zhTitle = await rl.question('请输入中文题目名称 (如: 三数之和): ');
        if (!zhTitle.trim()) {
            console.error('中文题目名称不能为空。退出。');
            process.exit(1);
        }

        enTitle = await rl.question('请输入英文题目名称 (如: 3Sum): ');
        if (!enTitle.trim()) {
            console.error('英文题目名称不能为空。退出。');
            process.exit(1);
        }
        
        rl.close();
    }

    problemNumber = problemNumber.trim();
    zhTitle = zhTitle.trim();
    enTitle = enTitle.trim();

    globalZhTitle = zhTitle;
    globalEnTitle = enTitle;

    console.log('\n==============================');
    console.log(`开始生成文件及配置...`);

    // 1. Scaffold Markdown files
    createMarkdownFile(ZH_DIR, zhTitle, moduleName, problemNumber);
    createMarkdownFile(EN_DIR, enTitle, moduleName, problemNumber);

    // 2. Update Sidebars
    updateSidebar(ZH_TS_PATH, '/', zhTitle, 'zh', moduleName, problemNumber);
    updateSidebar(EN_TS_PATH, '/en/', enTitle, 'en', moduleName, problemNumber);

    console.log('\n✅ 模板生成与侧边栏更新成功完成！享受刷题吧！');
}

main().catch(err => {
    console.error('发生错误:', err);
    process.exit(1);
});
