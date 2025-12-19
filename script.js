const BASE_PATH = 'imagens/E-COMMERCE/';

// 1. MAPEAMENTO COMPLETO DAS FOTOS
const imageMap = {
    // --- SÉRIE A ---
    'A0015.RS0096': { f: 'A0015.RS0096.1.jpg', c: 'A0015.RS0096.3.jpg' },
    'A0044.AZ0119': { f: 'A0044.AZ0119.1.jpg', c: 'A0044.AZ0119.3.jpg' },
    'A0050.ES0475': { f: 'A0050.ES0475.1.jpg', c: 'A0050.ES0475.3.jpg' },
    'A0051.ES0474': { f: 'A0051.ES0474.1.jpg', c: 'A0051.ES0474.2.jpg' },
    'A0052.ES0479': { f: 'A0052.ES0479.1.jpg', c: 'A0052.ES0479.3.jpg' },
    'A0057.AZ0120': { f: 'A0057.AZ0120.1.jpg', c: 'A0057.AZ0120.2.jpg' },
    'A0058.VD0122': { f: 'A0058.VD0122.1.jpg', c: 'A0058.VD0122.3.jpg' },
    'A0058.BG0007': { f: 'A0058.BG0007.1.jpg', c: 'A0058.BG0007.2.jpg' },
    'A0059.BR0002': { f: 'A0059.BR0002.1.jpg', c: 'A0059.BR0002.2.jpg' },
    'A0059.PR0001': { f: 'A0059.PR0001.2.jpg', c: 'A0059.PR0001.3.jpg' },
    'A0300.PR0001': { f: 'A0059.PR0001.2.jpg', c: 'A0059.PR0001.3.jpg' },
    'A0301.VM0037': { f: 'A0301.VM0037.1.jpg', c: 'A0301.VM0037.2.jpg' },
    'A0400.ES0480': { f: 'A0400.ES0480.1.jpg', c: 'A0400.ES0480.2.jpg' },
    'A0401.ES0477': { f: 'A0401.ES0477.1.jpg', c: 'A0401.ES0477.3.jpg' },
    'A0402.ES0478': { f: 'A0402.ES0478.1.jpg', c: 'A0402.ES0478.2.jpg' },
    'A0403.ES0476': { f: 'A0403.ES0476.1.jpg', c: 'A0403.ES0476.4.jpg' },

    // --- SÉRIE C ---
    'C0153.AZ0119': { f: 'C0153.AZ0119.1.jpg', c: 'C0153.AZ0119.4.jpg' },
    'C0186.ES0477': { f: 'C0186.ES0477.1.jpg', c: 'C0186.ES0477.4.jpg' },
    'C0187.ES0476': { f: 'C0187.ES0476.1.jpg', c: 'C0187.ES0476.4.jpg' },
    'C0188.ES0475': { f: 'C0188.ES0475.1.jpg', c: 'C0188.ES0475.4.jpg' },
    'C0189.ES0480': { f: 'C0189.ES0480.1.jpg', c: 'C0189.ES0480.4.jpg' },
    'C0190.ES0478': { f: 'C0190.ES0478.1.jpg', c: 'C0190.ES0478.4.jpg' },
    'C0191.ES0474': { f: 'C0191.ES0474.1.jpg', c: 'C0191.ES0474.4.jpg' },
    'C0192.ES0479': { f: 'C0192.ES0479.3.jpg', c: 'C0192.ES0479.4.jpg' },
    'C0200.PR0001': { f: 'C0200.PR0001.1.jpg', c: 'C0200.PR0001.4.jpg' },
    'C0201.BG0034': { f: 'C0201.BG0034.1.jpg', c: 'C0201.BG0034.4.jpg' },
    'C0202.PR0001': { f: 'C0202.PR0001.1.jpg', c: 'C0202.PR0001.4.jpg' },
    'C0203.AM0022': { f: 'C0203.AM0022.1.jpg', c: 'C0203.AM0022.4.jpg' },
    'C0203.AZ0116': { f: 'C0203.AZ0116.1.jpg', c: 'C0203.AZ0116.4.jpg' },
    'C0203.VM0035': { f: 'C0203.VM0035.1.jpg', c: 'C0203.VM0035.4.jpg' },
    'C0204.AM0022': { f: 'C0204.AM0022.1.jpg', c: 'C0204.AM0022.4.jpg' },
    'C0204.AZ0116': { f: 'C0204.AZ0116.1.jpg', c: 'C0204.AZ0116.4.jpg' },
    'C0204.VM0035': { f: 'C0204.VM0035.1.jpg', c: 'C0204.VM0035.4.jpg' },
    'C0205.AM0022': { f: 'C0205.AM0022.1.jpg', c: 'C0205.AM0022.4.jpg' },
    'C0205.AZ0116': { f: 'C0205.AZ0116.1.jpg', c: 'C0205.AZ0116.4.jpg' },
    'C0205.VM0035': { f: 'C0205.VM0035.1.jpg', c: 'C0205.VM0035.4.jpg' },
    'C0206.AZ0120': { f: 'C0206.AZ0120.1.jpg', c: 'C0206.AZ0120.4.jpg' },
    'C0207.AZ0120': { f: 'C0207.AZ0120.1.jpg', c: 'C0207.AZ0120.4.jpg' },
    'C0208.AZ0120': { f: 'C0208.AZ0120.1.jpg', c: 'C0208.AZ0120.4.jpg' },
    'C0209.BG0007': { f: 'C0209.BG0007.1.jpg', c: 'C0209.BG0007.4.jpg' },
    'C0209.VD0122': { f: 'C0209.VD0122.1.jpg', c: 'C0209.VD0122.4.jpg' },
    'C0210.BG0007': { f: 'C0210.BG0007.1.jpg', c: 'C0210.BG0007.4.jpg' },
    'C0210.VD0122': { f: 'C0210.VD0122.1.jpg', c: 'C0210.VD0122.4.jpg' },
    'C0211.ES0474': { f: 'C0211.ES0474.1.jpg', c: 'C0211.ES0474.4.jpg' }, 
    'C0211.VD0122': { f: 'C0211.VD0122.1.jpg', c: 'C0211.VD0122.4.jpg' },
    'C0212.BG0007': { f: 'C0212.BG0007.1.jpg', c: 'C0212.BG0007.4.jpg' },
    'C0212.VD012': { f: 'C0212.VD012.1.jpg', c: 'C0212.VD012.4.jpg' }, 
    'C0213.BR0002': { f: 'C0213.BR0002.1.jpg', c: 'C0213.BR0002.3.jpg' },
    'C0213.PR0001': { f: 'C0213.PR0001.1.jpg', c: 'C0213.PR0001.4.jpg' },
    'C0214.BR0002': { f: 'C0214.BR0002.1.jpg', c: 'C0214.BR0002.4.jpg' },
    'C0214.PR0001': { f: 'C0214.PR0001.1.jpg', c: 'C0214.PR0001.4.jpg' },
    'C0215.PR0001': { f: 'C0215.PR0001.1.jpg', c: 'C0215.PR0001.4.jpg' },
    'C0216.BR0002': { f: 'C0216.BR0002.1.jpg', c: 'C0216.BR0002.4.jpg' },
    'C0216.PR0001': { f: 'C0216.PR0001.1.jpg', c: 'C0216.PR0001.4.jpg' },
    'C0217.BR0002': { f: 'C0217.BR0002.1.jpg', c: 'C0217.BR0002.4.jpg' },
    'C0217.PR0001': { f: 'C0217.PR0001.1.jpg', c: 'C0217.PR0001.4.jpg' },
    'C0218.BR0034': { f: 'C0218.BR0034.1.jpg', c: 'C0218.BR0034.4.jpg' },
    'C0218.PR0001': { f: 'C0218.PR0001.1.jpg', c: 'C0218.PR0001.4.jpg' },
    'C0219.BR0034': { f: 'C0219.BR0034.1.jpg', c: 'C0219.BR0034.4.jpg' },
    'C0219.PR0001': { f: 'C0219.PR0001.1.jpg', c: 'C0219.PR0001.4.jpg' },
    'C0220.BG0034': { f: 'C0220.BG0034.1.jpg', c: 'C0220.BG0034.4.jpg' },
    'C0300.VM0037': { f: 'C0300.VM0037.1.jpg', c: 'C0300.VM0037.4.jpg' },
    'C0301.VM0037': { f: 'C0301.VM0037.1.jpg', c: 'C0301.VM0037.4.jpg' },
    'C0302.PR0001': { f: 'C0302.PR0001.1.jpg', c: 'C0302.PR0001.4.jpg' },
    'C0302.RS0096': { f: 'C0302.RS0096.1.jpg', c: 'C0302.RS0096.4.jpg' },
    'C0303.PR0001': { f: 'C0303.PR0001.1.jpg', c: 'C0303.PR0001.4.jpg' },
    'C0303.RS0096': { f: 'C0303.RS0096.1.jpg', c: 'C0303.RS0096.4.jpg' },
    'C0304.AZ0119': { f: 'C0304.AZ0119.1.jpg', c: 'C0304.AZ0119.2.jpg' },
    'C0305.AZ0119': { f: 'C0305.AZ0119.1.jpg', c: 'C0305.AZ0119.4.jpg' },
    'C0306.BR0001': { f: 'C0306.BR0001.1.jpg', c: 'C0306.BR0001.4.jpg' },
    'C0307.BR0001': { f: 'C0307.BR0001.1.jpg', c: 'C0307.BR0001.4.jpg' },
    'C0308.PR0001': { f: 'C0308.PR0001.1.jpg', c: 'C0308.PR0001.4.jpg' },
    'C0309.PR0001': { f: 'C0309.PR0001.1.jpg', c: 'C0309.PR0001.4.jpg' },
    'C0400.ES0474': { f: 'C0400.ES0474.1.jpg', c: 'C0400.ES0474.3.jpg' },
    'C0400.ES0475': { f: 'C0400.ES0475.1.jpg', c: 'C0400.ES0475.4.jpg' },
    'C0400.ES0476': { f: 'C0400.ES0476.1.jpg', c: 'C0400.ES0476.2.jpg' },
    'C0400.ES0477': { f: 'C0400.ES0477.1.jpg', c: 'C0400.ES0477.4.jpg' },
    'C0400.ES0478': { f: 'C0400.ES0478.1.jpg', c: 'C0400.ES0478.4.jpg' },
    'C0400.ES0479': { f: 'C0400.ES0479.1.jpg', c: 'C0400.ES0479.4.jpg' },
    'C0400.ES0480': { f: 'C0400.ES0480.1.jpg', c: 'C0400.ES0480.4.jpg' },
    'C0401.ES0474': { f: 'C0401.ES0474.1.jpg', c: 'C0401.ES0474.4.jpg' },
    'C0401.ES0478': { f: 'C0401.ES0478.1.jpg', c: 'C0401.ES0478.3.jpg' },
    'C0401.ES0479': { f: 'C0401.ES0479.1.jpg', c: 'C0401.ES0479.4.jpg' },
    'C0402.ES0474': { f: 'C0402.ES0474.1.jpg', c: 'C0402.ES0474.4.jpg' },
    'C0402.ES0478': { f: 'C0402.ES0478.1.jpg', c: 'C0402.ES0478.4.jpg' },
    'C0402.ES0479': { f: 'C0402.ES0479.1.jpg', c: 'C0402.ES0479.4.jpg' },
    'C0403.ES0475': { f: 'C0403.ES0475.1.jpg', c: 'C0403.ES0475.4.jpg' },
    'C0403.ES0476': { f: 'C0403.ES0476.1.jpg', c: 'C0403.ES0476.4.jpg' },
    'C0403.ES0477': { f: 'C0403.ES0477.1.jpg', c: 'C0403.ES0477.4.jpg' },
    'C0403.ES0480': { f: 'C0403.ES0480.1.jpg', c: 'C0403.ES0480.4.jpg' },
    'C0404.ES0475': { f: 'C0404.ES0475.1.jpg', c: 'C0404.ES0475.3.jpg' },
    'C0404.ES0476': { f: 'C0404.ES0476.1.jpg', c: 'C0404.ES0476.4.jpg' },
    'C0404.ES0477': { f: 'C0404.ES0477.1.jpg', c: 'C0404.ES0477.4.jpg' },
    'C0404.ES0480': { f: 'C0404.ES0480.1.jpg', c: 'C0404.ES0480.4.jpg' },
    'C0405.ES0474': { f: 'C0405.ES0474.1.jpg', c: 'C0405.ES0474.4.jpg' },
    'C0405.ES0478': { f: 'C0405.ES0478.1.jpg', c: 'C0405.ES0478.4.jpg' },
    'C0405.ES0479': { f: 'C0405.ES0479.1.jpg', c: 'C0405.ES0479.4.jpg' },
    'C0406.ES0475': { f: 'C0406.ES0475.1.jpg', c: 'C0406.ES0475.4.jpg' },
    'C0406.ES0476': { f: 'C0406.ES0476.1.jpg', c: 'C0406.ES0476.4.jpg' },
    'C0406.ES0477': { f: 'C0406.ES0477.1.jpg', c: 'C0406.ES0477.4.jpg' },
    'C0406.ES0480': { f: 'C0406.ES0480.1.jpg', c: 'C0406.ES0480.4.jpg' },
    'C0410.ES0478': { f: 'C0410.ES0478.1.jpg', c: 'C0410.ES0478.3.jpg' },

    // --- SÉRIE T ---
    'T0185.VM0037': { f: 'T0185.VM0037.1.jpg', c: 'T0185.VM0037.4.jpg' },
    'T0193.ES0476': { f: 'T0193.ES0476.1.jpg', c: 'T0193.ES0476.4.jpg' },
    'T0221.BR0002': { f: 'T0221.BR0002.1.jpg', c: 'T0221.BR0002.4.jpg' },
    'T0222.BR0002': { f: 'T0222.BR0002.1.jpg', c: 'T0222.BR0002.3.jpg' },
    'T0306.BR0001': { f: 'T0306.BR0001.1.jpg', c: 'T0306.BR0001.4.jpg' }
};

// 2. LISTA AUTOMÁTICA
const listaProdutos = Object.keys(imageMap);

// 3. SISTEMA DE FILTRAGEM
function obterCategoria(id) {
    const ref = id.toUpperCase();
    
    // Filtros de cor
    if (ref.includes('.AZ')) return 'azul';
    if (ref.includes('.VD')) return 'verde';
    if (ref.includes('.PR')) return 'preto';
    if (ref.includes('.RS') || ref.includes('.VM')) return 'rosa';
    if (ref.includes('.ES')) return 'estampado';
    
    // Agrupa branco, bege e amarelo sob o filtro 'branco'
    if (ref.includes('.BR') || ref.includes('.BG') || ref.includes('.AM')) return 'branco';
    
    return 'outros';
}

function renderizar(filtro = 'todos') {
    const grid = document.getElementById('grid-produtos');
    if (!grid) return;

    // Gerencia o botão ativo
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(`'${filtro}'`)) {
            btn.classList.add('active');
        }
    });

    const filtrados = listaProdutos.filter(id => {
        if (filtro === 'todos') return true;
        return obterCategoria(id) === filtro;
    });

    grid.innerHTML = filtrados.map(id => {
        const img = imageMap[id];
        if (!img) return '';

        return `
            <div class="card">
                <div class="ref-badge">REF: ${id}</div>
                <div class="img-container">
                    <img src="${BASE_PATH}${img.f}" class="img-frente" alt="${id}" loading="lazy">
                    <img src="${BASE_PATH}${img.c}" class="img-costas" alt="${id} Costas" loading="lazy">
                </div>
                <div class="info">
                    <a href="https://wa.me/5511961547785?text=Olá Anai Beachwear, vi a peça REF: ${id} no site e tenho interesse." 
                       target="_blank" 
                       class="btn-whatsapp">
                       Ver Disponibilidade
                    </a>
                </div>
            </div>`;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => renderizar('todos'));